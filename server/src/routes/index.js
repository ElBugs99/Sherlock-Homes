import { Router } from "express";
const router = Router();
import { getHouses, getHouseById, getFeaturedHouses, deleteHouse, updateHouse } from "../controllers/index.controller.js";
import { pool } from '../controllers/index.controller.js';

router.get('/houses', getHouses) //get todas las casas
router.get('/houses/:id', getHouseById)
router.get('/featured', getFeaturedHouses)
//router.post('/houses', createHouse)
router.delete('/houses/:id', deleteHouse)
router.put('/houses/:id', updateHouse)

router.get('/ping', async (req, res) => {
    const result = await pool.query('SELECT NOW()')
    return res.json(result.rows[0])
})


export default router;