import express, { Request, Response } from "express";
import cors from "cors";
import "dotenv/config";
import mongoose from "mongoose";
import userRoute from "./routes/userRoute";
import restaurantRoute from "./routes/restaurantRoute";
import subRestaurantRoute from "./routes/subRestaurantRoute";
import { v2 as cloudinary } from "cloudinary";
mongoose.connect(process.env.MONGO_URL as string).then(() => {
  console.log("Connected to MongoDB");
});

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});
const app = express();
app.use(express.json());
app.use(cors());

app.get("/health", async (req: Request, res: Response) => {
  res.send("Server is running");
});

app.get("/test", async (req: Request, res: Response) => {
  res.json({ message: "Hello World" });
});

app.use("/api/my/user", userRoute);
app.use("/api/my/restaurant", restaurantRoute);
app.use("/api/sub-restaurants", subRestaurantRoute);

app.listen(7000, () => {
  console.log("Server is running on port 7000");
});
