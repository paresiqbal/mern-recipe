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

router.post("/login", async (req, res) => {
  const { username, password } = req.body;

  // Find username in modal
  const user = await UserModel.findOne({ username });

  if (!user) return res.json({ message: "User does't exist !" });

  // Compare input user password with real password
  const isPasswordValid = await bcrypt.compare(password, user.password);
  if (!isPasswordValid) {
    return res.json({ message: "Username or Password is incorrect !" });
  }

  // Send token
  const token = jwt.sign({ id: user._id }, "secret");
  res.json({ token, userID: user.id });
});

export { router as userRouter };

// Middleware
// export const verifyToken = (req, res, next) => {
//   const token = req.headers.authorization;
//   if (token) {
//     jwt.verify(token, "", (err) => {
//       if (err) return res.sendStatus(403);

//       next();
//     });
//   } else {
//     res.sendStatus(401);
//   }
// };
