import express from "express";

const usersRouter = express.Router();

usersRouter.get("/", (req, res) => {
  res.send("In /users");
});

export default usersRouter;
