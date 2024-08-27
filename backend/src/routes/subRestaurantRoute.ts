import express from "express";
import { param } from "express-validator";
import subRestaurantController from "../controllers/subRestaurantController";

const router = express.Router();

// api/restaurant/search/:city
router.get(
  "/search/:city",
  param("city")
    .isString()
    .trim()
    .notEmpty()
    .withMessage("City phải là một chuỗi hợp lệ"),
  subRestaurantController.searchRestaurant
);

router.get(
  "/:restaurantId",
  param("restaurantId")
    .isString()
    .trim()
    .notEmpty()
    .withMessage("RestaurantId paramenter must be a valid string"),
  subRestaurantController.getRestaurant
);

export default router;
