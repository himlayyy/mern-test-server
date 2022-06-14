// import bcrypt from "bcryptjs";
import bcrypt from "bcrypt";
import { createError } from "../utils/error.js";
import User from "../models/users.js";
import jwt from "jsonwebtoken";

export const register = async (req, res, next) => {
  try {
    // const salt = bcrypt.genSaltSync(10);
    // const hash = bcrypt.hashSync(req.body.password, salt);
    const saltRounds = 10;
    const myPlainTextPassword = req.body.password;
    bcrypt.hash(myPlainTextPassword, saltRounds, function (err, hash) {
      const newUser = new User({
        username: req.body.username,
        email: req.body.email,
        passwordHash: hash,
      });
      newUser.save();
      res.status(200).json("User has been created");
    });
  } catch (err) {
    next(err);
  }
};

export const login = async (req, res, next) => {
  try {
    const user = await User.findOne({ username: req.body.username });
    const hash = user.passwordHash;
    const plainTextPassword = req.body.password;
    bcrypt.compare(plainTextPassword, hash, function (err, result) {
      if (!result) return next(createError(404, "Wrong password or username"));
    });

    const {passwordHash, isAdmin, ...otherDetails} = user._doc; 

    res.status(200).json(otherDetails);
  } catch (err) {
    next(err);
  }
};
