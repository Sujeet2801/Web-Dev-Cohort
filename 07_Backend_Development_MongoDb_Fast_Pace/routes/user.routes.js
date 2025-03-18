import express from 'express'
import { getMe, login, registerUser, verifyUser } from '../controllers/user.controller.js'
import { isLoggedIn } from '../middleware/auth.middleware.js';

const router = express.Router();

router.post("/registration", registerUser);
router.get("/verify/:token", verifyUser);
router.post("/login", login);
router.get("/me", isLoggedIn, getMe); // event driven architecture

export default router;