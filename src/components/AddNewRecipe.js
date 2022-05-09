import React from "react";

const AddNewRecipe = (props) => {
  return (
    <div>
      <h2>Add new recipe</h2>
      <form action="">
        <div>
          <label htmlFor="name">Name</label>
          <input type="text" id="name" />
        </div>
        <div>
          <label htmlFor="author">Author</label>
          <input type="text" id="author" />
        </div>
        <div>
          <label htmlFor="country-select">Recipe is from:</label>
          <select name="country" id="country">
            <option value="">--Please choose an option--</option>
            <option value="finland">Finland</option>
            <option value="vietnam">Vietnam</option>
            <option value="america">America</option>
          </select>
        </div>
        <div>
          <label htmlFor="desc">Description</label>
          <textarea name="desc" id="desc" cols="30" rows="10"></textarea>
        </div>
        <div>
          <label htmlFor="imageUrl">Image URL</label>
          <input type="text" id="imageUrl" />
        </div>
        <div>
          <p>Ingredients</p>
          <label htmlFor="quantity">quantity</label>
          <input type="number" id="quantity" />
          <label htmlFor="ingredient">ingredient</label>
          <input type="text" id="ingredient" />
          <button>Add more</button>
        </div>
        <div>
          <label htmlFor="instruction">Instructions</label>
          <textarea
            name="instruction"
            id="instruction"
            cols="30"
            rows="10"
          ></textarea>
        </div>
        <button type="submit">Post recipe</button>
      </form>
    </div>
  );
};

export default AddNewRecipe;
