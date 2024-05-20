import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { pool } from '../../controllers/index.controller.js';
import { randomBytes } from 'crypto';

const generateSecretKey = () => {
  return randomBytes(32).toString('hex');
};

const secretKey = generateSecretKey();
console.log('Generated Secret Key:', secretKey);

export const login = async (req, res) => {
    const { email, password } = req.body;
    
    try {
        // Check if user exists
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

        // Create payload with user information including role
        const payload = {
            id: user.id,
            username: user.username,
            email: user.email,
            role: user.role
        };

        const token = jwt.sign(payload, secretKey, {
            expiresIn: '1h' // Token expires in 1 hour
        });
        
        res.json({ token, user: payload });
    } catch (error) {
        console.error('Error logging in user:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
};