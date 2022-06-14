//mern-test
//  aQLPO22xhE7fXqcO

import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cookieParser from "cookie-parser";

import authRouter from "./routes/auth.js";
import hotelsRouter from "./routes/hotels.js";
import usersRouter from "./routes/users.js";
import roomsRouter from "./routes/rooms.js";


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
  console.log("mongoDB connected");
});

app.get("/", (req, res) => {
  res.send("Hello first request");
});

// Middlewares
app.use(cookieParser());
app.use(express.json());

app.use("/api/auth", authRouter);
app.use("/api/hotels", hotelsRouter);
app.use("/api/rooms", roomsRouter);
app.use("/api/users", usersRouter);

// error handler
app.use((err, req, res, next) => {
  const errorStatus = err.status || 500;
  const errorMessage = err.message || "Something went wrong";
  return res.status(500).json({
    success: false,
    status: errorStatus,
    message: errorMessage,
    stack: err.stack,
  });
});

// Starts server
app.listen(8000, () => {
  // Then connects to MongoDB
  connect();
  console.log("Server is running");
});
