import express from 'express'
import { forgotPassword, getMe, login, logoutUser, registerUser, resetPassword, verifyUser } from '../controllers/user.controller.js'
import { isLoggedIn } from '../middleware/auth.middleware.js';

const router = express.Router();

router.post("/registration", registerUser);
router.get("/verify/:token", verifyUser);
router.post("/login", login);
router.get("/me", isLoggedIn, getMe); // event driven architecture
router.get("/logout", isLoggedIn, logoutUser);
router.post("/forgot-password", forgotPassword);
router.post("/reset-password/:token", resetPassword);

export default router;