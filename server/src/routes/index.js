import { Router } from "express";
const router = Router();
import { getHouses } from "../controllers/index.controller.js";

router.get('/houses', getHouses)

export default router;