import express from "express";
import Hotel from "../models/hotels.js";
import { createHotel, deleteHotel, getHotel, getHotels, updateHotel } from "../controllers/hotels.js";
import { verifyAdmin } from "../utils/verifyToken.js";

const hotelsRouter = express.Router();

// Create
hotelsRouter.post("/", verifyAdmin, createHotel);

// Update
hotelsRouter.put("/:id", verifyAdmin ,updateHotel);

// Delete
hotelsRouter.delete("/:id",verifyAdmin, deleteHotel);

// Get one
hotelsRouter.get("/:id", getHotel);

//Get all
hotelsRouter.get("/",getHotels );
export default hotelsRouter;
