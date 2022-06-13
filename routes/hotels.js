import express from "express";
import Hotel from "../models/hotels.js";
import { createHotel, deleteHotel, getHotel, getHotels, updateHotel } from "../controllers/hotels.js";
import { createError } from "../utils/error.js";

const hotelsRouter = express.Router();

// Create
hotelsRouter.post("/", createHotel);

// Update
hotelsRouter.put("/:id", updateHotel);

// Delete
hotelsRouter.delete("/:id",deleteHotel);

// Get one
hotelsRouter.get("/:id", getHotel);

//Get all
hotelsRouter.get("/",getHotels );
export default hotelsRouter;
