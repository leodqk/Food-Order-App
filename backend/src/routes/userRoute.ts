import { validateUserRequest } from "./../middlewares/validation";
import express from "express";
import UserController from "../controllers/userController";
import { jwtCheck, jwtParse } from "../middlewares/auth";

const router = express.Router();

router.get("/", jwtCheck, jwtParse, UserController.getCurrentUser);
router.post("/", jwtCheck, UserController.createCurrentUser);
router.put(
  "/",
  jwtCheck,
  jwtParse,
  validateUserRequest,
  UserController.updateCurrentUser
);

export default router;
