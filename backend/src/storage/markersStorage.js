import { promises as fs } from 'fs';
import { randomUUID } from 'crypto';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const dataDir = path.resolve(__dirname, '../../data');
const dataFile = path.join(dataDir, 'markers.json');

async function ensureFile() {
  try {
    await fs.mkdir(dataDir, { recursive: true });
    await fs.access(dataFile).catch(async () => {
      await fs.writeFile(dataFile, '[]', 'utf8');
    });
  } catch (e) {
    // let it throw in callers
    throw e;
  }
}

// Simple in-process queue to serialize write operations (avoids file lock/races on Windows)
let writeQueue = Promise.resolve();

async function readAll() {
  await ensureFile();
  const raw = await fs.readFile(dataFile, 'utf8');
  try {
    const arr = JSON.parse(raw);
    return Array.isArray(arr) ? arr : [];
  } catch {
    return [];
  }
}

async function atomicWrite(jsonStr) {
  await ensureFile();
  const tmp = `${dataFile}.tmp`;
  await fs.writeFile(tmp, jsonStr, 'utf8');
  await fs.rename(tmp, dataFile);
}

function enqueueWrite(task) {
  const next = writeQueue.then(task);
  // Keep the queue alive even if a task fails
  writeQueue = next.catch(() => {});
  return next;
}

export async function listMarkers() {
  // Ensure we read after pending writes
  await writeQueue.catch(() => {});
  return readAll();
}

export function addMarker({ lat, lng, title }) {
  return enqueueWrite(async () => {
    const arr = await readAll();
    const id = randomUUID();
    const marker = { id, lat, lng, title: title || null, createdAt: new Date().toISOString() };
    arr.push(marker);
    await atomicWrite(JSON.stringify(arr, null, 2));
    return marker;
  });
}

export function removeMarker(id) {
  return enqueueWrite(async () => {
    const arr = await readAll();
    const idx = arr.findIndex((m) => m.id === id);
    if (idx === -1) return false;
    arr.splice(idx, 1);
    await atomicWrite(JSON.stringify(arr, null, 2));
    return true;
  });
}
