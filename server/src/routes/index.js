import { Router } from "express";
const router = Router();
import { getHouses, getHouseById, deleteHouse, updateHouse } from "../controllers/index.controller.js";

router.get('/houses', getHouses) //get todas las casas
router.get('/houses/:id', getHouseById)
//router.post('/houses', createHouse)
router.delete('/houses/:id', deleteHouse)
router.put('/houses/:id', updateHouse)


export default router;