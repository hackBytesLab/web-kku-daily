import api from './api.js';

function joinUrl(base, path) {
  const normalizedPath = path.startsWith('/') ? path : '/' + path;
  if (!base) return normalizedPath;
  const trimmedBase = base.endsWith('/') ? base.slice(0, -1) : base;
  return trimmedBase + normalizedPath;
}

function parseMarkers(payload) {
  if (!Array.isArray(payload)) return [];
  return payload.map((item) => ({
    ...item,
    lat: Number(item.lat),
    lng: Number(item.lng),
  }));
}

function createPoller(callback, intervalMs) {
  let timer = null;
  const poll = async () => {
    try {
      const { data } = await api.get('markers');
      callback(parseMarkers(data));
    } catch (err) {
      // eslint-disable-next-line no-console
      console.error('[markersApi] Polling failed', err);
    }
  };
  poll();
  timer = setInterval(poll, intervalMs);
  return () => timer && clearInterval(timer);
}

export function listenMarkers(callback) {
  let closed = false;
  let stopPolling = null;
  let source = null;

  const deliver = (payload) => {
    if (closed) return;
    callback(parseMarkers(payload));
  };

  api.get('markers').then((res) => deliver(res.data)).catch((err) => {
    console.error('[markersApi] Failed to fetch markers', err);
  });

  const streamUrl = joinUrl(api.defaults.baseURL || '', '/markers/stream');

  if (typeof window !== 'undefined' && window.EventSource) {
    try {
      source = new EventSource(streamUrl);
      source.addEventListener('markers', (event) => {
        try {
          const data = JSON.parse(event.data);
          deliver(data);
        } catch (err) {
          console.error('[markersApi] Failed to parse stream payload', err);
        }
      });
      source.onerror = () => {
        if (source) {
          source.close();
          source = null;
        }
        if (!closed && !stopPolling) {
          stopPolling = createPoller(deliver, 5000);
        }
      };
    } catch (err) {
      console.error('[markersApi] Failed to open EventSource', err);
      stopPolling = createPoller(deliver, 5000);
    }
  } else {
    stopPolling = createPoller(deliver, 5000);
  }

  return () => {
    closed = true;
    if (source) {
      source.close();
      source = null;
    }
    if (stopPolling) {
      stopPolling();
      stopPolling = null;
    }
  };
}

export async function addMarker({ lat, lng, title, description, photoURL }) {
  const { data } = await api.post('markers', { lat, lng, title, description, photoURL });
  return data;
}

export async function updateMarker(id, fields) {
  await api.patch('markers/' + id, fields);
}

export async function deleteMarker(id) {
  await api.delete('markers/' + id);
}

export async function clearAllMarkers() {
  await api.delete('markers');
}
