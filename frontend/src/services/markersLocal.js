// Local mock (Design Mode): stores markers in localStorage
const KEY = 'design_markers_v1';

function load() {
  try { return JSON.parse(localStorage.getItem(KEY)) || []; } catch { return []; }
}

function save(arr) { localStorage.setItem(KEY, JSON.stringify(arr)); }

let listeners = new Set();
let state = load();

function emit() { listeners.forEach((cb) => cb([...state])); }

export function listenMarkers(callback) {
  listeners.add(callback);
  callback([...state]);
  return () => listeners.delete(callback);
}

export async function addMarker({ lat, lng, title, description, photoURL }) {
  const id = `${Date.now()}_${Math.random().toString(36).slice(2, 8)}`;
  const marker = { id, lat: Number(lat), lng: Number(lng), title: title || null, description: description || null, photoURL: photoURL || null, createdAt: new Date().toISOString() };
  state.push(marker); save(state); emit();
  return marker;
}

export async function updateMarker(id, fields) {
  const idx = state.findIndex((m) => m.id === id);
  if (idx === -1) return;
  state[idx] = { ...state[idx], ...fields }; save(state); emit();
}

export async function deleteMarker(id) {
  state = state.filter((m) => m.id !== id); save(state); emit();
}

export async function clearAllMarkers() { state = []; save(state); emit(); }

// Backward compatibility exports (remove when no longer needed)
export { addMarker as addMarkerFs, updateMarker as updateMarkerFs, deleteMarker as deleteMarkerFs, clearAllMarkers as clearAllMarkersFs };
