import express from "express";
import {
  deleteUser,
  getUser,
  getUsers,
  updateUser,
} from "../controllers/user.js";
import { verifyAdmin, verifyToken, verifyUser } from "../utils/verifyToken.js";

const usersRouter = express.Router();

// // Check authentication
// usersRouter.get("/checkauthentication", verifyToken, (req, res, next) => {
//   // Returns if you are logged in (there is a cookie)
//   res.send("Hello user, you are logged in");
// });

// usersRouter.get("/checkuser/:id", verifyUser, (req, res, next) => {
//   // Returns if you are logged in (there is a cookie)
//   res.send("Hello user, you are logged in and you can delete  your account");
// });

// usersRouter.get("/checkadmin/:id", verifyAdmin, (req, res, next) => {
//   // Returns if you are logged in (there is a cookie)
//   res.send("Hello admin, you are logged in and you can delete  all accounts");
// });

// Get users
usersRouter.get("/", verifyAdmin, getUsers);

// Get user
usersRouter.get("/:id",  verifyUser, getUser);

// Delete users
usersRouter.delete("/:id",  verifyAdmin,deleteUser);

// Update users
usersRouter.put("/:id", verifyUser, updateUser);
export default usersRouter;
