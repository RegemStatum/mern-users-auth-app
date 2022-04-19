import express from "express";
import { login, register, getInfo } from "../controllers/authController.js";
import jwtMW from "../middleware/jwt-middleware.js";

const router = express.Router();

router.post("/register", register);
router.post("/login", login);
router.get("/info", jwtMW, getInfo);

export default router;
