// Library
import express from "express";
import mongoose from "mongoose";

// Models
import { RecipeModel } from "../models/Recipes.js";
import { UserModel } from "../models/Users.js";

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

// Add new recepies
router.post("/", async (req, res) => {
  const recipe = new RecipeModel(req.body);

  try {
    await recipe.save();
    res.json(recipe);
  } catch (error) {
    res.json(error);
  }
});

// Save recipe
router.put("/", async (req, res) => {
  const recipe = await RecipeModel.findById(req.body.recipeID);
  const user = await UserModel.findById(req.body.userID);

  // Find user name push new recipe to list bookmark
  user.savedRecipes.push(recipe);
  await user.save();

  res.json({ savedRecipes: user.savedRecipes });
  try {
    await recipe.save();
    res.json(recipe);
  } catch (error) {
    res.json(error);
  }
});

export { router as recipeRouter };
