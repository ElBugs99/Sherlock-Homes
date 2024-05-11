import fs from 'fs/promises';
import { pool } from '../controllers/index.controller.js';
import path from 'path';
import { fileURLToPath } from 'url';
import pkg from 'pg';
const { array } = pkg;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const filePath = path.join(__dirname, '..', '..', 'data', 'houseData.json');

async function insertData(filePath) {
  let client;
  try {
    const data = JSON.parse(await fs.readFile(filePath, 'utf8'));
    // Create a unique connection (client)
    client = await pool.connect();

    for (const item of data) {
      const {
        title,
        price,
        uf,
        property_type,
        bedrooms,
        bathrooms,
        sqft,
        address,
        description,
        region,
        city,
        listing_url,
        transaction,
        latitude,
        longitude,
        media
      } = item;

      /* const media1 = media */
      console.log('item', item)

      // Format the media array as a PostgreSQL array string
      const mediaArrayString = JSON.stringify(media);

      // Replace square brackets with curly braces to match PostgreSQL array format
      const formattedMediaArrayString = mediaArrayString.replace('[', '{').replace(']', '}');

      // Insert data into the database
      await client.query(
        'INSERT INTO house (id, title, price, uf, property_type, bedrooms, bathrooms, sqft, address, description, region, city, listing_url, transaction, latitude, longitude, media) VALUES (DEFAULT, $1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16)',
        [
          title,
          price,
          uf,
          property_type,
          bedrooms,
          bathrooms,
          sqft,
          address,
          description,
          region,
          city,
          listing_url,
          transaction,
          latitude,
          longitude,
          formattedMediaArrayString // Insert media array as a string
        ]
      );
    }

    // Commit the transaction
    await client.query('COMMIT');
    console.log('Data inserted successfully.');
  } catch (error) {
    // Rollback the transaction in case of an error
    if (client) {
      await client.query('ROLLBACK');
    }
    console.error('Error inserting data:', error);
  } finally {
    // Release the connection to make it available again in the connection pool
    if (client) {
      client.release();
    }
  }
}

insertData(filePath);

export default insertData;

/* import fs from 'fs/promises';
import { pool } from '../controllers/index.controller.js';
import path from 'path';
//global __dirname no disponible con ES modules, se debe importar
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const filePath = path.join(__dirname, '..', '..', 'data', 'houseData.json');


async function insertData(filePath) {
  const data = JSON.parse(await fs.readFile(filePath, 'utf8'));
  //crea una conexion unica (cliente)
  const client = await pool.connect();
  try {
    await client.query('BEGIN');
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

export default insertData; */