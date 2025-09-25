import Database from 'better-sqlite3';
import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';
import { randomUUID } from 'crypto';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const defaultPath = path.resolve(__dirname, '../../data/app.sqlite');
const dbPath = process.env.DB_PATH ? path.resolve(process.cwd(), process.env.DB_PATH) : defaultPath;

// Ensure directory exists
fs.mkdirSync(path.dirname(dbPath), { recursive: true });

const db = new Database(dbPath);

// Pragmas for reliability on single-user/small apps
db.pragma('journal_mode = WAL');
db.pragma('synchronous = NORMAL');

// Schema
db.prepare(`CREATE TABLE IF NOT EXISTS markers (
  id TEXT PRIMARY KEY,
  lat REAL NOT NULL,
  lng REAL NOT NULL,
  title TEXT,
  description TEXT,
  photo_url TEXT,
  createdAt TEXT NOT NULL
)`).run();

// Migration (one-time): import existing JSON markers if the table is empty
try {
  const row = db.prepare('SELECT COUNT(1) as c FROM markers').get();
  // Ensure new columns exist (for older DBs)
  const cols = db.prepare("PRAGMA table_info('markers')").all();
  const ensureColumn = (name, ddl) => {
    if (!cols.some((c) => c.name === name)) {
      try { db.prepare(ddl).run(); } catch {}
    }
  };
  ensureColumn('description', 'ALTER TABLE markers ADD COLUMN description TEXT');
  ensureColumn('photo_url', 'ALTER TABLE markers ADD COLUMN photo_url TEXT');

  if ((row?.c ?? 0) === 0) {
    const jsonPath = path.resolve(__dirname, '../../data/markers.json');
    if (fs.existsSync(jsonPath)) {
      const raw = fs.readFileSync(jsonPath, 'utf8');
      let arr = [];
      try { arr = JSON.parse(raw); } catch { arr = []; }
      if (Array.isArray(arr) && arr.length) {
        const insert = db.prepare('INSERT INTO markers (id, lat, lng, title, description, photo_url, createdAt) VALUES (?, ?, ?, ?, ?, ?, ?)');
        const tx = db.transaction((items) => {
          for (const it of items) {
            insert.run(
              it.id || randomUUID(),
              Number(it.lat),
              Number(it.lng),
              it.title ?? null,
              it.description ?? null,
              it.photoURL ?? null,
              it.createdAt || new Date().toISOString()
            );
          }
        });
        tx(arr);
      }
    }
  }
} catch (e) {
  // eslint-disable-next-line no-console
  console.error('SQLite migration error:', e);
}

export default db;
