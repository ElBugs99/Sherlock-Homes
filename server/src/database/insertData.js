import fs from 'fs/promises';
import { pool } from '../controllers/index.controller.js';

async function insertData(filePath) {
  const data = JSON.parse(await fs.readFile(filePath, 'utf8'));
  //const client = await pool.connect();
  try {
    //await client.query('BEGIN');
    for (const item of data) {
      console.log(item);
    }
    //await client.query('COMMIT');
  } catch (e) {
    console.log('fallo la wea')
    //await client.query('ROLLBACK');
    throw e;
  } finally {
    //client.release();
  }
}

insertData()

export default insertData;