import express from "express";
import { createRoom, deleteRoom, getRoom, getAllRooms, updateRoom } from "../controllers/room.js";
import { verifyAdmin } from "../utils/verifyToken.js";
import Rooms from "../models/rooms.js";

const roomsRouter = express.Router();

// Create room
roomsRouter.post("/:hotelId", verifyAdmin, createRoom);

// Update room
roomsRouter.put("/:id", verifyAdmin,updateRoom);

// Delete room
roomsRouter.delete("/:hotelId/:roomId", verifyAdmin, deleteRoom);

// Get room
roomsRouter.get("/", getRoom);

// Get rooms
roomsRouter.get("/", getAllRooms);

export default roomsRouter;
