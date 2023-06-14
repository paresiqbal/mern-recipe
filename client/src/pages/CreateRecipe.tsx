// React
import { useState } from "react";

export default function CreateRecipe() {
  const [recipe, setRecipe] = useState({
    name: "",
    ingridients: [],
    instruction: "",
    imageUrl: "",
    cookingTime: 0,
    userOwner: 0,
  });

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

  console.log(recipe);
  return (
    <div className="p-10 flex flex-col items-center">
      <h2 className="text-xl font-semibold">Create Recipe</h2>
      <form action="" className="w-full max-w-md mt-4">
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Name
          </label>
          <input
            className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
            id="name"
            type="text"
            placeholder="Name"
            onChange={handleInput}
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
