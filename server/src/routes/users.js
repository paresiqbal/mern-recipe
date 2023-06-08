// Models
import { UserModel } from "../models/Users.js";

// Library
import express from "express";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

const router = express.Router();

// Route
router.post("/register", async (req, res) => {
  const { username, password } = req.body;

  // Find username in modal
  const user = await UserModel.findOne({ username });

  if (user) return res.json({ message: "User already exists !" });
  const hashedPassword = await bcrypt.hash(password, 10);

  // Add new user and hashed the password
  const newUser = new UserModel({ username, password: hashedPassword });
  await newUser.save();

  res.json({ message: "Registered Successfully" });
});

router.post("/login");

export { router as userRouter };
