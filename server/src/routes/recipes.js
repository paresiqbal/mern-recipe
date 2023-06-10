// Library
import express from "express";
import mongoose from "mongoose";

// Models
import { RecipeModel } from "../models/Recipes.js";

const router = express.Router();

// Get all recipe and showit to homepage
router.get("/", async (req, res) => {
  try {
    const response = await RecipeModel.find({});
    res.json(response);
  } catch (error) {
    res.json(error);
  }
});

router.post("/", async (req, res) => {
  const recipe = new RecipeModel(req.body);

  try {
    await recipe.save();
    res.json(recipe);
  } catch (error) {
    res.json(error);
  }
});

export { router as recipeRouter };
