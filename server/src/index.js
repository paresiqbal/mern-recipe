// Library
import express from "express";
import cors from "cors";
import mongoose from "mongoose";

// Route
import { userRouter } from "./routes/users.js";
import { recipeRouter } from "./routes/recipes.js";

const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// Router
app.use("/auth", userRouter);
app.use("/recipes", recipeRouter);

// Mongo connection
mongoose.connect(
  "mongodb+srv://paresiqbal:CJnq3lhjDRJXBWHx@recipes.sd8s4ft.mongodb.net/recipes?retryWrites=true&w=majority"
);

// Running porst
app.listen(3001, () => console.log("Server Running"));
