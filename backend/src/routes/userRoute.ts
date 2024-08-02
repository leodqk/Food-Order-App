import express from "express";
import UserController from "../controllers/userController";
import { jwtCheck } from "../middlewares/auth";

const router = express.Router();

router.post("/", jwtCheck, UserController.createCurrentUser);

export default router;
