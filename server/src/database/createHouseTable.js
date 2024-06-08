import { pool } from '../controllers/index.controller.js';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function createOrUpdateTable() {
  try {
    const client = await pool.connect();

    const createTableQuery = `
      CREATE TABLE IF NOT EXISTS house (
        id SERIAL PRIMARY KEY,
        title TEXT,
        price NUMERIC,
        uf NUMERIC,
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

    const checkColumnTypeQuery = `
      SELECT column_name, data_type 
      FROM information_schema.columns 
      WHERE table_name = 'house' 
        AND column_name = 'uf';
    `;
    
    const res = await client.query(checkColumnTypeQuery);
    
    if (res.rows.length > 0 && res.rows[0].data_type === 'text') {
      console.log('Altering column type of uf to NUMERIC...');
      const alterColumnTypeQuery = `
        ALTER TABLE house 
        ALTER COLUMN uf 
        TYPE NUMERIC 
        USING uf::numeric;
      `;
      await client.query(alterColumnTypeQuery);
      console.log('Column type altered successfully.');
    }

    console.log('Table created or updated successfully.');
    client.release();
  } catch (error) {
    console.error('Error creating or updating table:', error);
  }
}

createOrUpdateTable();

export default createOrUpdateTable;
