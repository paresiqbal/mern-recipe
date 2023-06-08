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

  res.json(user);
});

router.post("/login");

export { router as userRouter };
