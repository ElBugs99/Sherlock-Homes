import { pool } from '../controllers/index.controller.js';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function createTable() {
  try {
    const client = await pool.connect();
    // SQL query to create the users table
    const createTableQuery = `
      CREATE TABLE IF NOT EXISTS users (
        id SERIAL PRIMARY KEY,
        username TEXT UNIQUE,
        email TEXT UNIQUE,
        password TEXT,
        role TEXT
      );
    `;
    await client.query(createTableQuery);
    console.log('User table created successfully.');
    client.release();
  } catch (error) {
    console.error('Error creating user table:', error);
  }
}

createTable();

export default createTable;