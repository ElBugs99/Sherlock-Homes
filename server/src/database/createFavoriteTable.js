import { pool } from '../controllers/index.controller.js';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function createTable() {
  try {
    const client = await pool.connect();
    // SQL query to create the favorites table
    const createTableQuery = `
      CREATE TABLE IF NOT EXISTS favorites (
        favorite_id SERIAL PRIMARY KEY,
        user_id INTEGER NOT NULL,
        property_id INTEGER NOT NULL,
        added_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE,
        FOREIGN KEY (property_id) REFERENCES house(id) ON DELETE CASCADE
      );
    `;
    await client.query(createTableQuery);
    console.log('Favorites table created successfully.');
    client.release();
  } catch (error) {
    console.error('Error creating favorites table:', error);
  }
}

createTable();

export default createTable;
