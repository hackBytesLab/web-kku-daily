import db from '../db/sqlite.js';
import { randomUUID } from 'crypto';
import { emitMarkersChanged } from '../utils/markersEvents.js';

const selectAll = db.prepare('SELECT id, lat, lng, title, description, photo_url as photoURL, createdAt FROM markers ORDER BY datetime(createdAt) ASC');
const insert = db.prepare('INSERT INTO markers (id, lat, lng, title, description, photo_url, createdAt) VALUES (@id, @lat, @lng, @title, @description, @photoURL, @createdAt)');
const del = db.prepare('DELETE FROM markers WHERE id = ?');
const delAll = db.prepare('DELETE FROM markers');
const getById = db.prepare('SELECT id FROM markers WHERE id = ?');

export function listMarkers() {
  return selectAll.all();
}

export function addMarker({ lat, lng, title, description, photoURL }) {
  const marker = {
    id: randomUUID(),
    lat: Number(lat),
    lng: Number(lng),
    title: title ?? null,
    description: description ?? null,
    photoURL: photoURL ?? null,
    createdAt: new Date().toISOString(),
  };
  insert.run(marker);
  emitMarkersChanged();
  return marker;
}

export function removeMarker(id) {
  const info = del.run(id);
  const changed = info.changes > 0;
  if (changed) emitMarkersChanged();
  return changed;
}

export function clearAll() {
  delAll.run();
  emitMarkersChanged();
}

export function updateMarker(id, fields) {
  const existing = getById.get(id);
  if (!existing) return false;
  const sets = [];
  const args = [];
  if (typeof fields.lat === 'number') { sets.push('lat = ?'); args.push(fields.lat); }
  if (typeof fields.lng === 'number') { sets.push('lng = ?'); args.push(fields.lng); }
  if (fields.title !== undefined) { sets.push('title = ?'); args.push(fields.title ?? null); }
  if (fields.description !== undefined) { sets.push('description = ?'); args.push(fields.description ?? null); }
  if (fields.photoURL !== undefined) { sets.push('photo_url = ?'); args.push(fields.photoURL ?? null); }
  if (!sets.length) return true;
  const stmt = db.prepare(`UPDATE markers SET ${sets.join(', ')} WHERE id = ?`);
  const info = stmt.run(...args, id);
  const changed = info.changes > 0;
  if (changed) emitMarkersChanged();
  return changed;
}

export function importMany(items, { replace = false } = {}) {
  const tx = db.transaction((arr) => {
    if (replace) delAll.run();
    for (const it of arr) {
      const row = {
        id: it.id || randomUUID(),
        lat: Number(it.lat),
        lng: Number(it.lng),
        title: it.title ?? null,
        description: it.description ?? null,
        photoURL: it.photoURL ?? null,
        createdAt: it.createdAt || new Date().toISOString(),
      };
      insert.run(row);
    }
  });
  tx(items);
  emitMarkersChanged();
}
