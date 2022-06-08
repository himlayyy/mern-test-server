//mern-test
//  aQLPO22xhE7fXqcO

import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";

const app = express();
dotenv.config();

// Initial connection to MongoDB
const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO);
    console.log("Connected to MongoDB");
  } catch (error) {
    throw error;
  }
};

// Listener for disconnection
mongoose.connection.on("disconnected", () => {
  console.log("mongoDB connected");
});
// Listener for connection
mongoose.connection.on("connected", () => {
    console.log("mongoDB connected")
})

// Starts server
app.listen(8000, () => {
  // Then connects to MongoDB
  connect();
  console.log("Server is running");
});
