// React
import { useState } from "react";

// Library
import axios from "axios";

// Hooks
import { useGetUserID } from "../hooks/useGetUserID";
import { useNavigate } from "react-router-dom";

export default function CreateRecipe() {
  const userID = useGetUserID();
  const [recipe, setRecipe] = useState({
    name: "",
    ingridients: [],
    instruction: "",
    imageUrl: "",
    cookingTime: 0,
    userOwner: userID,
  });

  const navigate = useNavigate();

  const handleInput = (e: React.FormEvent) => {
    const { name, value } = e.target;
    setRecipe({ ...recipe, [name]: value });
  };

  const handleIngredientChange = (e: React.FormEvent, idx) => {
    const { value } = e.target;
    const ingredients = [...recipe.ingridients];
    ingredients[idx] = value; // Change `index` to `idx`
    setRecipe({ ...recipe, ingridients: ingredients }); // Change `ingredients` to `ingridients`
  };

  const addIngridient = () => {
    setRecipe({ ...recipe, ingridients: [...recipe.ingridients, ""] });
  };

  const submitForm = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      await axios.post("http://localhost:3001/recipes", recipe);
      alert("Recipe Created");
      navigate("/");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="p-10 flex flex-col items-center">
      <h2 className="text-xl font-semibold">Create Recipe</h2>
      <form className="w-full max-w-md mt-4" onSubmit={submitForm}>
        <div className="mb-4">
          <label
            htmlFor="name"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Name"
            onChange={handleInput}
            className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
          />
        </div>
        <div className="flex flex-col">
          <label
            htmlFor="ingridients"
            className="block text-gray-700 text-sm font-bold mb-2"
            placeholder="Ingridients"
          >
            Ingridients
          </label>
          {recipe.ingridients.map((ingridient, idx) => (
            <input
              key={idx}
              type="text"
              name="ingridients"
              value={ingridient}
              onChange={(e) => handleIngredientChange(e, idx)}
            />
          ))}
          <button type="button" onClick={addIngridient}>
            Add Ingridients
          </button>
        </div>
        <div className="flex flex-col">
          <label
            htmlFor="instruction"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Instruction
          </label>
          <textarea
            name="instruction"
            id="instruction"
            rows={10}
            placeholder="Insctruction"
            onChange={handleInput}
            className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
          ></textarea>
        </div>
        <div className="flex flex-col">
          <label
            htmlFor="imageUrl"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            ImageUrl
          </label>
          <input
            type="text"
            name="imageUrl"
            id="imageUrl"
            placeholder="Image"
            onChange={handleInput}
            className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
          />
        </div>
        <div className="flex flex-col">
          <label
            htmlFor="cookingTime"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Time
          </label>
          <input
            type="text"
            name="cookingTime"
            id="cookingTime"
            onChange={handleInput}
            placeholder="30 Minute"
            className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
