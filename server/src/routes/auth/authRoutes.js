import express from 'express';
import { login } from './controller.js';

const router = express.Router();

// User login route
router.post('/login', login);

router.get('/login', async (req, res) => {
  return res.json({ message: "Hola login" });
});

export default router;