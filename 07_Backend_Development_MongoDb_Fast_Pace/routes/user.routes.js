import express from 'express'
import { login, registerUser, verifyUser } from '../controllers/user.controller.js'

const router = express.Router();

router.post("/registration", registerUser);
router.get("/verify/:token", verifyUser);
router.post("/login", login);

export default router;