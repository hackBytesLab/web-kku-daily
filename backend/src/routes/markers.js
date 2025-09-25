import { Router } from 'express';
import { listMarkers, addMarker, removeMarker, clearAll, updateMarker, importMany } from '../repos/markersRepo.js';
import { onMarkersChanged } from '../utils/markersEvents.js';

const router = Router();

// GET /api/markers
router.get('/', async (req, res, next) => {
  try {
    const markers = await listMarkers();
    res.json(markers);
  } catch (err) {
    next(err);
  }
});

// GET /api/markers/stream (Server-Sent Events)
router.get('/stream', (req, res, next) => {
  try {
    res.setHeader('Content-Type', 'text/event-stream');
    res.setHeader('Cache-Control', 'no-cache');
    res.setHeader('Connection', 'keep-alive');
    res.flushHeaders?.();

    let closed = false;

    const close = (unsubscribe) => {
      if (closed) return;
      closed = true;
      clearInterval(keepAlive);
      unsubscribe?.();
      res.end();
    };

    const send = () => {
      try {
        const payload = JSON.stringify(listMarkers());
        res.write(`event: markers\n`);
        res.write(`data: ${payload}\n\n`);
      } catch (err) {
        close(unsubscribe);
      }
    };

    const unsubscribe = onMarkersChanged(send);

    // Keep-alive ping every 30s to avoid proxies closing connection
    const keepAlive = setInterval(() => {
      res.write(': ping\n\n');
    }, 30000);

    // Send initial snapshot
    send();

    req.on('close', () => close(unsubscribe));
  } catch (err) {
    next(err);
  }
});

// POST /api/markers { lat, lng, title? }
router.post('/', async (req, res, next) => {
  try {
    const { lat, lng, title, description, photoURL } = req.body || {};
    if (typeof lat !== 'number' || typeof lng !== 'number') {
      return res.status(400).json({ message: 'lat and lng must be numbers' });
    }
    const marker = await addMarker({ lat, lng, title, description, photoURL });
    res.status(201).json(marker);
  } catch (err) {
    next(err);
  }
});

// DELETE /api/markers/:id
router.delete('/:id', async (req, res, next) => {
  try {
    const { id } = req.params;
    const ok = await removeMarker(id);
    if (!ok) return res.status(404).json({ message: 'Not found' });
    res.json({ success: true });
  } catch (err) {
    next(err);
  }
});

// PATCH /api/markers/:id (update position/title/description)
router.patch('/:id', async (req, res, next) => {
  try {
    const { id } = req.params;
    const { lat, lng, title, description, photoURL } = req.body || {};
    const ok = await updateMarker(id, { lat, lng, title, description, photoURL });
    if (!ok) return res.status(404).json({ message: 'Not found' });
    res.json({ success: true });
  } catch (err) {
    next(err);
  }
});

// DELETE /api/markers (clear all)
router.delete('/', async (req, res, next) => {
  try {
    await clearAll();
    res.json({ success: true });
  } catch (err) {
    next(err);
  }
});

// GET /api/markers/export (download JSON)
router.get('/export/all', async (req, res, next) => {
  try {
    const markers = await listMarkers();
    res.setHeader('Content-Type', 'application/json');
    res.setHeader('Content-Disposition', 'attachment; filename="markers.json"');
    res.send(JSON.stringify(markers, null, 2));
  } catch (err) {
    next(err);
  }
});

// POST /api/markers/import { items: [...], replace?: boolean }
router.post('/import', async (req, res, next) => {
  try {
    const { items, replace } = req.body || {};
    if (!Array.isArray(items)) return res.status(400).json({ message: 'items must be an array' });
    await importMany(items, { replace: !!replace });
    res.json({ success: true });
  } catch (err) {
    next(err);
  }
});

export default router;
