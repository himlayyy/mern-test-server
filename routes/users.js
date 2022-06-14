import express from "express";
import {
  deleteUser,
  getUser,
  getUsers,
  updateUser,
} from "../controllers/user.js";
import { verifyToken } from "../utils/verifyToken.js";

const usersRouter = express.Router();

// Check authentication
usersRouter.get("/checkauthentication", verifyToken, (req, res, next) =>{
  // Returns if you are logged in (there is a cookie)
  res.send("Hello user, you are logged in");
})

// Get users
usersRouter.get("/", getUsers);

// Get user
usersRouter.get("/:id", getUser);

// Delete users
usersRouter.delete("/:id", deleteUser);

// Update users
usersRouter.put("/", updateUser);
export default usersRouter;
