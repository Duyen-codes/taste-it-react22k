import React from "react";
import styles from "./AddNewRecipe.module.css";

const AddNewRecipe = (props) => {
  console.log("AddNewRecipe props", props);
  return (
    <div className={styles.AddNewRecipe}>
      <h2>Add new recipe</h2>
      <form onChange={props.onChange} className={styles.newRecipeForm}>
        <div>
          <label htmlFor="name">Name</label>
          <input type="text" id="name" name="name" />
        </div>
        <div>
          <label htmlFor="author">Author</label>
          <input type="text" id="author" name="author" />
        </div>
        <div>
          <label htmlFor="origin">Recipe is from:</label>
          <select name="origin" id="origin">
            <option value="">--Please choose an option--</option>
            <option value="finland">Finland</option>
            <option value="vietnam">Vietnam</option>
            <option value="america">America</option>
          </select>
        </div>
        <div>
          <label htmlFor="description">Description</label>
          <textarea
            name="description"
            id="description"
            cols="30"
            rows="10"
          ></textarea>
        </div>
        <div>
          <label htmlFor="imageURL">Image URL</label>
          <input type="text" id="imageURL" name="imageURL" />
        </div>
        <div>
          <label htmlFor="ingredients">Ingredients:</label>
          <label htmlFor="quantity">Quantity</label>
          <input type="number" id="quantity" name="quantity" />
          <label htmlFor="unit">Unit</label>
          <input type="text" id="unit" name="unit" />
          <label htmlFor="ingredientName">ingredient</label>
          <input type="text" id="ingredientName" name="ingredientName" />
          <button>Add more</button>
        </div>
        <div>
          <label htmlFor="instructions">Instructions</label>
          <textarea
            name="instructions"
            id="instructions"
            cols="30"
            rows="10"
          ></textarea>
        </div>
        <button type="submit" onClick={props.onSubmit}>
          Post recipe
        </button>
      </form>
    </div>
  );
};

export default AddNewRecipe;
