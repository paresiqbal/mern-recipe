// Library
import mongoose from "mongoose";

const RecipeSchema = mongoose.Schema({
  name: { type: String, require: true },
  ingredients: [{ type: String, require: true }],
  instructions: { type: String, require: true },
  imageUrl: { type: String, require: true },
  cookingTime: { type: Number, require: true },
  userOwner: { type: mongoose.Schema.Types.ObjectId },
});

export const RecipeModel = mongoose.model("recipes", RecipeSchema);
