import { Request, Response } from "express";
import Restaurant from "../models/restaurant";
import { Multer } from "multer";
import cloudinary from "cloudinary";
import mongoose from "mongoose";
const createRestaurant = async (req: Request, res: Response) => {
  try {
    // one user can only have one restaurant
    const existingRestaurant = await Restaurant.findOne({ user: req.userId });
    if (existingRestaurant) {
      return res.status(400).json({ message: "User already has a restaurant" });
    }
    const image = req.file as Express.Multer.File;
    const base64Imgae = Buffer.from(image.buffer).toString("base64");
    const dataUrl = `data:${image.mimetype};base64,${base64Imgae}`;
    const uploadResponse = await cloudinary.v2.uploader.upload(dataUrl);

    const restaurant = new Restaurant(req.body);
    restaurant.imageUrl = uploadResponse.url;
    restaurant.user = new mongoose.Types.ObjectId(req.userId);
    restaurant.lastUpdated = new Date();
    await restaurant.save();
    res.status(201).json(restaurant.toObject());
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Something went wrong" });
  }
};

export default { createRestaurant };
