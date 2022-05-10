import React, { useState } from "react";
import styles from "./AddNewRecipe.css";
import axios from "axios";

const AddNewRecipe = (props) => {
  console.log("AddNewRecipe props", props);

  // form input state
  const [inputData, setInputData] = useState({
    name: "",
    author: "",
    origin: "",
    description: "",
    imageURL: "",
    instructions: "",
  });

  // ingredient state
  const [ingredients, setIngredients] = useState([
    {
      quantity: "",
      unit: "",
      ingredientName: "",
    },
  ]);

  // Handle form input change
  const handleInputChange = (event) => {
    console.log("handle input change");
    setInputData({ ...inputData, [event.target.name]: event.target.value });
  };

  // Handle ingredient change
  const handleIngredientChange = (event) => {
    console.log("handle ingredient change");
    setIngredients({ ...ingredients, [event.target.name]: event.target.value });
  };

  // handle add more ingredient fields
  const handleAddMore = (e) => {
    console.log("add more clicked");
    setIngredients([
      ...ingredients,
      { quantity: "", unit: "", ingredientName: "" },
    ]);
  };
  // Handle post recipe

  const handleSubmit = (event) => {
    setInputData((inputData) => [...inputData, ingredients]);
    console.log("handle submit clicked");
    event.preventDefault();
    axios
      .post("http://localhost:3001/recipes", inputData)
      .then((res) => {
        console.log(res);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="AddNewRecipe">
      <h2>Add new recipe</h2>
      <form className={styles.newRecipeForm}>
        <div>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label htmlFor="author">Author</label>
          <input
            type="text"
            id="author"
            name="author"
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label htmlFor="origin">Recipe is from:</label>
          <select name="origin" id="origin" onChange={handleInputChange}>
            <option value="">--Please choose an option--</option>
            <option value="finland">Finland</option>
            <option value="vietnam">Vietnam</option>
            <option value="america">America</option>
          </select>
        </div>
        <div>
          <label htmlFor="description">Description</label>
          <textarea
            onChange={handleInputChange}
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
            onChange={handleInputChange}
          />
        </div>

        <div>
          <label htmlFor="quantity">Quantity</label>
          <input
            type="number"
            id="quantity"
            name="quantity"
            onChange={handleIngredientChange}
          />
          <label htmlFor="unit">Unit</label>
          <input
            type="text"
            id="unit"
            name="unit"
            onChange={handleIngredientChange}
          />
          <label htmlFor="ingredientName">ingredient</label>
          <input
            type="text"
            id="ingredientName"
            name="ingredientName"
            onChange={handleIngredientChange}
          />
        </div>

        <button onClick={handleAddMore}>Add more</button>

        <div>
          <label htmlFor="instructions">Instructions</label>
          <textarea
            onChange={handleInputChange}
            name="instructions"
            id="instructions"
            cols="30"
            rows="10"
          ></textarea>
        </div>
        <button type="submit" onClick={handleSubmit}>
          Post recipe
        </button>
      </form>
    </div>
  );
};

export default AddNewRecipe;
