import express from "express";
import {
  deleteUser,
  getUser,
  getUsers,
  updateUser,
} from "../controllers/user.js";

const usersRouter = express.Router();

// Get users
usersRouter.get("/", getUsers);

// Get user
usersRouter.get("/:id", getUser);

// Delete users
usersRouter.delete("/:id", deleteUser);

// Update users
usersRouter.put("/", updateUser);
export default usersRouter;
