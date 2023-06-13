export default function CreateRecipe() {
  return (
    <div>
      <h2>Create Recipe</h2>
      <form action="">
        <div>
          <label htmlFor="name">Name</label>
          <input type="text" id="name" />
        </div>
        <div>
          <label htmlFor="description">Description</label>
          <textarea
            name="description"
            id="description"
            cols={20}
            rows={30}
          ></textarea>
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
          ></textarea>
        </div>
        <div>
          <label htmlFor="imageUrl">ImageUrl</label>
          <input type="text" name="imageUrl" id="imageUrl" />
        </div>
        <div>
          <label htmlFor="cookingTime">Cooking Time</label>
          <input type="number" id="cookingTime" name="cookingTime" />
        </div>
      </form>
    </div>
  );
}
