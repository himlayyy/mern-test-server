import express from "express";
import Hotel from "../models/hotels.js";

const hotelsRouter = express.Router();

// Create
hotelsRouter.post("/", async (req, res) => {
  const newHotel = new Hotel(req.body);
  try {
    const savedHotel = await newHotel.save();
    // This part gives the response. If wala ni walay return value sa insomnia
    res.status(200).json(newHotel);
  } catch (err) {
    res.status(500).json(err);
    console.error(err);
  }
});

// Update
hotelsRouter.put("/:id", async (req, res) => {
  try {
    const updatedHotel = await Hotel.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    // This part gives the response. If wala ni walay return value sa insomnia
    res.status(200).json(updatedHotel);
  } catch (err) {
    res.status(500).json(err);
    console.error(err);
  }
});

// Delete
hotelsRouter.delete("/:id", async (req, res) => {
  try {
    const deletedHotel = await Hotel.findByIdAndDelete(req.params.id);
    // This part gives the response. If wala ni walay return value sa insomnia
    res.status(200).json(deletedHotel);
  } catch (err) {
    res.status(500).json(deletedHotel);
    console.error(err);
  }
});

// Get one
hotelsRouter.get("/:id", async (req, res) => {
  try {
    const hotel = await Hotel.findById(req.params.id);
    // This part gives the response. If wala ni walay return value sa insomnia
    res.status(200).json(hotel);
  } catch (err) {
    res.status(500).json(hotel);
    console.error(err);
  }
});

//Get all
hotelsRouter.get("/", async (req, res) => {
  try {
    const hotels = await Hotel.find();
    // This part gives the response. If wala ni walay return value sa insomnia
    res.status(200).json(hotels);
  } catch (err) {
    res.status(500).json(hotels);
    console.error(err);
  }
});
export default hotelsRouter;
