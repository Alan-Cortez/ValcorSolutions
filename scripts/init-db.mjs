// Script para inicializar la base de datos Turso
// Ejecutar con: node scripts/init-db.mjs

import { createClient } from '@libsql/client';

const client = createClient({
  url: 'libsql://valcor-poetacortez.aws-us-west-2.turso.io',
  authToken: 'eyJhbGciOiJFZERTQSIsInR5cCI6IkpXVCJ9.eyJhIjoicnciLCJpYXQiOjE3ODcyODQ2MDUsImlkIjoiMDFhMDIyNzYtOTAwMS03ODhkLWFhM2ItYmEzMDU1MDljYjk1Iiwia2lkIjoidDN2T0g4UzZ3MHJ5bHpEaXZIdVJRX0ozZnpZdm5hcVdzWmNyMDZfdVpLZyIsInJpZCI6ImUxODFhYTc4LTc3MGYtNDhkYy04NTBkLTU0YTQ1ZWRkZGM5YiJ9.UMa3Hczbx98oeI6r_oytJ7bfJMD9Q2LQrJJS-k_kz4-hqbfrACdBExLAV11O9YxBvknasHB99Qd3od9fL9WHAw',
});

async function init() {
  console.log('Conectando a Turso...');

  const statements = [
    `CREATE TABLE IF NOT EXISTS projects (
      id          INTEGER PRIMARY KEY AUTOINCREMENT,
      title       TEXT NOT NULL,
      description TEXT,
      category    TEXT,
      tech_stack  TEXT,
      image_url   TEXT,
      project_url TEXT,
      featured    INTEGER DEFAULT 0,
      created_at  TEXT DEFAULT (datetime('now'))
    )`,
    `CREATE TABLE IF NOT EXISTS project_requests (
      id          INTEGER PRIMARY KEY AUTOINCREMENT,
      name        TEXT NOT NULL,
      email       TEXT NOT NULL,
      company     TEXT,
      service     TEXT,
      message     TEXT,
      status      TEXT DEFAULT 'nuevo',
      created_at  TEXT DEFAULT (datetime('now'))
    )`,
    `CREATE TABLE IF NOT EXISTS contacts (
      id          INTEGER PRIMARY KEY AUTOINCREMENT,
      name        TEXT NOT NULL,
      email       TEXT NOT NULL,
      subject     TEXT,
      message     TEXT,
      read        INTEGER DEFAULT 0,
      created_at  TEXT DEFAULT (datetime('now'))
    )`,
    `CREATE TABLE IF NOT EXISTS reviews (
      id          INTEGER PRIMARY KEY AUTOINCREMENT,
      author_name TEXT NOT NULL,
      company     TEXT,
      role        TEXT,
      content     TEXT NOT NULL,
      rating      INTEGER DEFAULT 5,
      visible     INTEGER DEFAULT 1,
      created_at  TEXT DEFAULT (datetime('now'))
    )`,
    `CREATE TABLE IF NOT EXISTS admin_emails (
      id    INTEGER PRIMARY KEY AUTOINCREMENT,
      email TEXT UNIQUE NOT NULL
    )`,
    `INSERT OR IGNORE INTO admin_emails (email) VALUES ('alanortez9966@gmail.com')`,
  ];

  for (const sql of statements) {
    await client.execute(sql);
    console.log('OK:', sql.substring(0, 50).replace(/\n/g, ' ').trim() + '...');
  }

  console.log('\nBase de datos inicializada correctamente.');
  console.log('Admin registrado: alanortez9966@gmail.com');
}

init().catch(console.error);
