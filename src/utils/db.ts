import Database from 'better-sqlite3';
import path from 'path';

const dbPath = path.join(process.cwd(), 'database', 'leads.db');
const db = new Database(dbPath);

db.exec(`
  CREATE TABLE IF NOT EXISTS leads (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    firstName TEXT NOT NULL,
    lastName TEXT NOT NULL,
    email TEXT NOT NULL,
    linkedin TEXT NOT NULL,
    visas TEXT NOT NULL,
    openInput TEXT,
    cvPath TEXT NOT NULL
  )
`);

export default db;
