import { Router } from "express";
import authRoutes from "./auth/authRoutes.js";
import {
  getHouses,
  getHouseById,
  getFeaturedHouses,
  deleteHouse,
  updateHouse,
  createUser,
  getAllUsers,
  addFavorite,
  getFavorites,
  deleteFavorite,
  getFavoritesByUserId,
  getComments,
  uploadComment,
  deleteComment,
  updateComment,
  getCommentsByPublication
} from "../controllers/index.controller.js";
import { pool } from '../controllers/index.controller.js';

const router = Router();

// Houses routes
router.get('/houses', getHouses);
router.get('/houses/:id', getHouseById);
router.get('/featured', getFeaturedHouses);
router.delete('/houses/:id', deleteHouse);
router.put('/houses/:id', updateHouse);

// Ping route
router.get('/ping', async (req, res) => {
  const result = await pool.query('SELECT NOW()')
  return res.json(result.rows[0])
});

// Authentication routes
router.use('/api/auth', authRoutes);

// Users routes
router.post('/register', createUser);
router.get('/users', getAllUsers);

//favorite
router.post('/addFavorite', addFavorite);
router.get('/favorites', getFavorites);
router.post('/deleteFavorite', deleteFavorite);
router.get('/favorites/:userId', getFavoritesByUserId);

//comments
router.get('/comments', getComments);
router.post('/uploadComment', uploadComment);
router.delete('/deleteComment/:commentId', deleteComment);
router.put('/updateComment/:commentId', updateComment);
router.get('/getCommentsByPublication/:publicationId', getCommentsByPublication);

export default router;