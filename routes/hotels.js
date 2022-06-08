import express from "express";

const hotelsRouter = express.Router();

hotelsRouter.get("/", (req, res) => {
  res.send("In /hotels");
});

export default hotelsRouter;
