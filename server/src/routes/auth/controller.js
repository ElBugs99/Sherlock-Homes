import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { pool } from '../../controllers/index.controller.js';

export const login = async (req, res) => {
    const { email, password } = req.body;
    
    try {
      // Check if user exists
      //TODO check username also 
      const userCheckQuery = {
        text: 'SELECT * FROM "users" WHERE email = $1',
        values: [email]
      };
      const userCheckResult = await pool.query(userCheckQuery);
  
      if (userCheckResult.rows.length === 0) {
        return res.status(400).json({ message: "Usuario/Contraseña incorrectos" });
      }
  
      const user = userCheckResult.rows[0];
  
      // Compare passwords
      const isMatch = await bcrypt.compare(password, user.password);
  
      if (!isMatch) {
        return res.status(400).json({ message: "Usuario/Contraseña incorrectos" });
      }
  
      //TODO Create and sign a JWT token
      /* const token = jwt.sign({ id: user.id, username: user.username, email: user.email }, SECRET_KEY, {
        expiresIn: '1h'
      }); */
      res.json({ message: 'Las contraseñas coinciden' } );
      //TODO res.json({ token, user: { id: user.id, username: user.username, email: user.email } });
    } catch (error) {
      console.error('Error logging in user:', error);
      res.status(500).json({ message: 'Internal server error' });
    }
}