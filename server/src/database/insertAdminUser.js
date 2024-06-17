import { pool } from '../controllers/index.controller.js';
import bcrypt from 'bcrypt';

async function insertAdminUser() {
  const username = 'Sherlock99';
  const email = 'sherlock99@gmail.com';
  const password = 'Asdfg123';
  const role = 'admin';

  try {
    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);
    
    // role of admin
    const insertUserQuery = {
      text: 'INSERT INTO "users" (username, email, password, role) VALUES ($1, $2, $3, $4)',
      values: [username, email, hashedPassword, role]
    };

    const client = await pool.connect();
    await client.query(insertUserQuery);
    console.log('Admin user inserted successfully.');
    client.release();
  } catch (error) {
    console.error('Error inserting admin user:', error);
  }
}

insertAdminUser();