import express from "express";
import mongoose from "mongoose";
import multer from "multer";
import restaurantController from "../controllers/restaurantController";
import { jwtCheck, jwtParse } from "../middlewares/auth";
import { validateRestaurantRequest } from "../middlewares/validation";
const router = express.Router();

const storage = multer.memoryStorage();
const upload = multer({
  storage: storage,
  limits: {
    fileSize: 5 * 1024 * 1024,
  },
});

router.post(
  "/",
  upload.single("imageFile"),
  validateRestaurantRequest,
  jwtCheck,
  jwtParse,
  restaurantController.createRestaurant
);

router.get("/", jwtCheck, jwtParse, restaurantController.getRestaurant);

router.put(
  "/",
  upload.single("imageFile"),
  jwtCheck,
  jwtParse,
  restaurantController.updateRestaurant
);

export default router;
