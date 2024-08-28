import mongoose from "mongoose";
// import { DB_HOST } from "../config.js";

const {DB_HOST} = process.env

export const connectMongoDB = async () => {
  try {
    await mongoose.connect(DB_HOST)
    console.log("Database connection successful")
  } catch (error) {
    console.log(`Connection error ${error.message}`)
    process.env(1)
  }
}