import React from "react";
import styles from "./AddNewRecipe.css";

const AddNewRecipe = (props) => {
  console.log("AddNewRecipe props", props);

  return (
    <div className="AddNewRecipe">
      <h2>Add new recipe</h2>
      <form className={styles.newRecipeForm}>
        <div>
          <label htmlFor="name">Name</label>
          <input type="text" id="name" name="name" onChange={props.onChange} />
        </div>
        <div>
          <label htmlFor="author">Author</label>
          <input
            type="text"
            id="author"
            name="author"
            onChange={props.onChange}
          />
        </div>
        <div>
          <label htmlFor="origin">Recipe is from:</label>
          <select name="origin" id="origin" onChange={props.onChange}>
            <option value="">--Please choose an option--</option>
            <option value="finland">Finland</option>
            <option value="vietnam">Vietnam</option>
            <option value="america">America</option>
          </select>
        </div>
        <div>
          <label htmlFor="description">Description</label>
          <textarea
            onChange={props.onChange}
            name="description"
            id="description"
            cols="30"
            rows="10"
          ></textarea>
        </div>
        <div>
          <label htmlFor="imageURL">Image URL</label>
          <input
            type="text"
            id="imageURL"
            name="imageURL"
            onChange={props.onChange}
          />
        </div>
        <div>
          <label htmlFor="ingredients">Ingredients:</label>
          <label htmlFor="quantity">Quantity</label>
          <input
            type="number"
            id="quantity"
            name="quantity"
            onChange={props.onIngredientChange}
          />
          <label htmlFor="unit">Unit</label>
          <input
            type="text"
            id="unit"
            name="unit"
            onChange={props.onIngredientChange}
          />
          <label htmlFor="ingredientName">ingredient</label>
          <input
            type="text"
            id="ingredientName"
            name="ingredientName"
            onChange={props.onIngredientChange}
          />
          <button onClick={props.addMore}>Add more</button>
        </div>
        <div>
          <label htmlFor="instructions">Instructions</label>
          <textarea
            onChange={props.onChange}
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
