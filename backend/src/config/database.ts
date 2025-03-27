import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const mongoURI: string = process.env.MONGO_URL as string;

if (!mongoURI) {
  throw new Error("MongoDB URI is not defined in the environment variables.");
}

export const connectDB = async () => {
  try {
    mongoose.connect(mongoURI);
    console.log("MongoDB connected successfully!");
  } catch (err) {
    console.error("MongoDB connection failed:", err);
  }
};
