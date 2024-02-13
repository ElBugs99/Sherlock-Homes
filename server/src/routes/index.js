import { Router } from "express";
const router = Router();
import { getHouses, getHouseById } from "../controllers/index.controller.js";

router.get('/houses', getHouses) //get todas las casas
router.get('/houses/:1')

//router.post('/houses', createHouse)

export default router;