import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const connect = async () => {
  const mongoURI = process.env.DB;

  try {
    await mongoose.connect(mongoURI);
    console.log("Connection established successfully");
    console.log("Connected to: ", mongoURI);
  } catch (err) {
    console.log("Something went wrong", err);
  }
};

export { connect };