import { pool } from '../controllers/index.controller.js';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function createTable() {
  try {
    const client = await pool.connect();
    // SQL query to create the comments table
    const createTableQuery = `
      CREATE TABLE IF NOT EXISTS comments (
        comment_id SERIAL PRIMARY KEY,
        publication_id INTEGER NOT NULL,
        user_id INTEGER NOT NULL,
        content TEXT NOT NULL,
        date_created TIMESTAMP NOT NULL,
        FOREIGN KEY (publication_id) REFERENCES house(id) ON DELETE CASCADE,
        FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
      );
    `;
    await client.query(createTableQuery);
    console.log('Comments table created successfully.');
    client.release();
  } catch (error) {
    console.error('Error creating comments table:', error);
  }
}

createTable();

export default createTable;
