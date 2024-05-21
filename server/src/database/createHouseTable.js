import { pool } from '../controllers/index.controller.js';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

//TODO include id uploaded by user

async function createTable() {
  try {
    const client = await pool.connect();
    // SQL query to create the houses table
    const createTableQuery = `
      CREATE TABLE IF NOT EXISTS house (
        id SERIAL PRIMARY KEY,
        title TEXT,
        price NUMERIC,
        uf TEXT,
        property_type TEXT,
        bedrooms INTEGER,
        bathrooms INTEGER,
        sqft INTEGER,
        address TEXT,
        description TEXT,
        region TEXT,
        city TEXT,
        listing_url TEXT,
        transaction TEXT,
        latitude NUMERIC,
        longitude NUMERIC,
        media TEXT[]
      );
    `;
    await client.query(createTableQuery);
    console.log('Table created successfully.');
    client.release();
  } catch (error) {
    console.error('Error creating table:', error);
  }
}

createTable();

export default createTable;