// Library
import express from "express";
import cors from "cors";
import mongoose from "mongoose";

const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// Mongo connection
mongoose.connect(
  "mongodb+srv://paresiqbal:CJnq3lhjDRJXBWHx@recipes.sd8s4ft.mongodb.net/recipes?retryWrites=true&w=majority"
);

// Running porst
app.listen(3001, () => console.log("Server Running"));
