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
  //crea una conexion unica (cliente)
  const client = await pool.connect();
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
      //insert
      await pool.query('insert into houses (title, priceString, priceNumber, atributes, location, imageUrl, url) values ($1, $2, $3, $4, $5, $6, $7)', 
        [
            title,
            priceString,
            priceNumber,
            atributes,
            location,
            imageUrl,
            url
        ])
    }
    //finaliza proceso y hace commit
    await client.query('COMMIT');
  } catch (e) {
    //en caso de error no se inserta ningun dato en la bd
    await client.query('ROLLBACK');
    throw e;
  } finally {
    //liberar la conexion para que vuelva a estar disponible en el pool de conexiones
    client.release();
  }
}

insertData(filePath);

//export default insertData;