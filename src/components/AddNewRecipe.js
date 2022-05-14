import React, { useState } from "react";
import styles from "./AddNewRecipe.css";
import axios from "axios";

const AddNewRecipe = (props) => {
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

  // finalInput state

  const [finalInputs, setFinalInputs] = useState({}); // should be an empty object to axios.post

  // Handle change for inputData
  const handleChange = (event) => {
    console.log("input change");
    setInputData({ ...inputData, [event.target.name]: event.target.value });
  };

  // Handle ingredient name change

  const handleIngredientNameChange = (e, ingredientIndex) => {
    console.log("ingredientName change", e, ingredientIndex);
    const newIngredientName = e.target.value;
    setIngredients(
      ingredients.map((ingredient, index) => {
        if (index === ingredientIndex) {
          return { ...ingredient, ingredientName: newIngredientName };
        }
        return ingredient;
      })
    );
  };

  // handle ingredient quantity change

  const handleIngredientQuantityChange = (e, ingredientIndex) => {
    console.log("quantity change");
    const newIngredientQuantity = e.target.value;
    setIngredients(
      ingredients.map((ingredient, index) => {
        if (index == ingredientIndex) {
          return { ...ingredient, quantity: newIngredientQuantity };
        }
        return ingredient;
      })
    );
  };

  // handle ingredient unit change
  const handleIngredientUnitChange = (e, ingredientIndex) => {
    console.log("unit change");
    const newIngredientUnit = e.target.value;
    setIngredients(
      ingredients.map((ingredient, index) => {
        if (index == ingredientIndex) {
          return { ...ingredient, unit: newIngredientUnit };
        }
        return ingredient;
      })
    );
  };

  // // handle add ingredient

  // const addIngredientInputs = () => {
  //   setIngredients([
  //     ...ingredients,
  //     {
  //       ingredientName: "",
  //       quantity: "",
  //       unit: "",
  //     },
  //   ]);
  // };

  // handle add more ingredient fields
  const handleAddMore = (e) => {
    console.log("add more clicked");
    setIngredients([
      ...ingredients,
      { quantity: "", unit: "", ingredientName: "" },
    ]);
  };

  // Handle post recipe
  const postFinalInputs = async (finalInputs) => {
    console.log(finalInputs);
    const response = await axios
      .post("http://localhost:3001/recipes", finalInputs)
      .then((res) => {
        console.log(res);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setFinalInputs({ ...inputData, ingredients: ingredients });
    console.log("handle submit clicked");
    await postFinalInputs(finalInputs);
  };

  return (
    <div className="AddNewRecipe">
      <h2>Add new recipe</h2>
      <form className={styles.newRecipeForm} onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            onChange={handleChange}
            value={inputData.name}
          />
        </div>
        <div>
          <label htmlFor="author">Author</label>
          <input
            type="text"
            id="author"
            name="author"
            onChange={handleChange}
            value={inputData.author}
          />
        </div>
        <div>
          <label htmlFor="origin">Recipe is from:</label>
          <select
            name="origin"
            id="origin"
            onChange={handleChange}
            value={inputData.origin}
          >
            <option value="">--Please choose an option--</option>
            <option value="finland">Finland</option>
            <option value="vietnam">Vietnam</option>
            <option value="america">America</option>
          </select>
        </div>
        <div>
          <label htmlFor="description">Description</label>
          <textarea
            value={inputData.description}
            onChange={handleChange}
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
            onChange={handleChange}
            value={inputData.imageURL}
          />
        </div>
        <label>Ingredients</label>
        {
          // render ingredients
          ingredients.map((ingredient, index) => (
            <div key={`ingredientName ${index}`}>
              <label htmlFor="quantity">Quantity</label>
              <input
                type="number"
                id="quantity"
                name="quantity"
                onChange={handleIngredientQuantityChange}
                value={ingredients.quantity}
              />
              <label htmlFor="unit">Unit</label>
              <input
                type="text"
                id="unit"
                name="unit"
                onChange={handleIngredientUnitChange}
                value={ingredients.unit}
              />
              <label htmlFor="ingredientName">ingredient name</label>
              <input
                type="text"
                id="ingredientName"
                name="ingredientName"
                onChange={handleIngredientNameChange}
                value={ingredients.ingredientName}
              />
            </div>
          ))
        }
        <button onClick={handleAddMore}>Add more</button>

        <div>
          <label htmlFor="instructions">Instructions</label>
          <textarea
            value={inputData.instructions}
            onChange={handleChange}
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
