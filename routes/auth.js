import express from "express";
import { register, login} from "../controllers/authentication.js";

const authRouter = express.Router();

// New user
authRouter.post("/register", register);

// Login
authRouter.post("/login", login);


export default authRouter;
