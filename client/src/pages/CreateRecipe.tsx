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

  const handleInput = (e: React.ChangeEvent) => {
    const { name, value } = e.target;
    setRecipe({ ...recipe, [name]: value });
  };

  return (
    <div>
      <h2>Create Recipe</h2>
      <form action="">
        <div>
          <label htmlFor="name">Name</label>
          <input type="text" id="name" onChange={handleInput} />
        </div>
        <div>
          <label htmlFor="ingridients">Ingridients</label>
        </div>
        <div>
          <label htmlFor="instruction">Instruction</label>
          <textarea
            name="instruction"
            id="instruction"
            cols={20}
            rows={30}
            onChange={handleInput}
          ></textarea>
        </div>
        <div>
          <label htmlFor="imageUrl">ImageUrl</label>
          <input
            type="text"
            name="imageUrl"
            id="imageUrl"
            onChange={handleInput}
          />
        </div>
        <div>
          <label htmlFor="cookingTime">Cooking Time</label>
          <input
            type="number"
            id="cookingTime"
            name="cookingTime"
            onChange={handleInput}
          />
        </div>
      </form>
    </div>
  );
}
