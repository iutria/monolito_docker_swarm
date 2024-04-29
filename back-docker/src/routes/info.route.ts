import {Router} from "express";

const router = Router();

router.get('/port', (req, res)=>{
    res.send(process.env.PORT)
});
router.get('/conn', (req, res)=>{
    res.send(process.env.CONNECTION_URI)
});

export default router;