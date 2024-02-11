import { Router } from "express";
const router = Router();

router.get('/houses', (req, res) => {
    res.send('houses');
})

export default router;