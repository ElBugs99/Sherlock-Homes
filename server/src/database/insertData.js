import fs from 'fs/promises';
import { pool } from '../controllers/index.controller.js';
import path from 'path';
//global __dirname no disponible con ES modules, se debe importar
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const filePath = path.join(__dirname, '..', '..', 'data', 'houseData.json');


//const hola = JSON.parse(await fs.readFile(filePath, 'utf8'));
//console.log(hola)


async function insertData(filePath) {
  const data = JSON.parse(await fs.readFile(filePath, 'utf8'));
  //const client = await pool.connect();
  try {
    //await client.query('BEGIN');
    for (const item of data) {
      const title = item.title;
      const priceString = item.priceString;
      const priceNumber = item.priceNumber;
      const atributes = item.atributes;
      const location = item.location;
      const imageUrl = item.imageUrl;
      const url = item.url;
      console.log(title);
      //const response = await pool.query('insert into houses (name, email) values ($1, 2$)', [name, email])
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

insertData(filePath);

//export default insertData;