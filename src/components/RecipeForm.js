import React, { useState, useEffect } from "react";
import styles from "./RecipeForm.module.css";
import axios from "axios";

const AddNewRecipe = (props) => {
  // Countries state for saving data from RESTcountries API
  const [countries, setCountries] = useState([]);

  /// fetch countries data
  useEffect(() => {
    axios.get("https://restcountries.com/v3.1/all").then((res) => {
      setCountries(res.data);
    });
  }, []);

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

  // Handle change for inputData
  const handleChange = (event) => {
    setInputData({ ...inputData, [event.target.name]: event.target.value });
  };

  // Handle ingredient name change
  const handleIngredientNameChange = (e, ingredientIndex) => {
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
    const newIngredientQuantity = e.target.value;
    setIngredients(
      ingredients.map((ingredient, index) => {
        if (index === ingredientIndex) {
          // 3 equal signs, 2 will give warning
          return { ...ingredient, quantity: newIngredientQuantity };
        }
        return ingredient;
      })
    );
  };

  // handle ingredient unit change
  const handleIngredientUnitChange = (e, ingredientIndex) => {
    const newIngredientUnit = e.target.value;
    setIngredients(
      ingredients.map((ingredient, index) => {
        if (index === ingredientIndex) {
          return { ...ingredient, unit: newIngredientUnit };
        }
        return ingredient;
      })
    );
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    axios
      .post("http://localhost:3001/recipes", {
        ...inputData,
        ingredients: ingredients,
      })
      .then((res) => {
        console.log(res);
      })
      .catch((error) => {
        console.log(error);
      });
    setInputData({
      name: "",
      author: "",
      origin: "",
      description: "",
      imageURL: "",
      instructions: "",
    });
    setIngredients({ quantity: "", unit: "", ingredientName: "" });
  };

  // handle add more ingredient fields
  const handleAddMore = () => {
    setIngredients([
      ...ingredients,
      { quantity: "", unit: "", ingredientName: "" },
    ]);
  };

  // handle remove ingredient
  const handleRemoveIngredient = () => {
    console.log("remove clicked");
  };

  return (
    <div className={styles.AddNewRecipe}>
      <h2>Add new recipe</h2>
      <form className={styles.newRecipeForm} onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            onChange={handleChange}
            value={inputData.name} // make input into controlled element
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
            {countries.map((country, index) => (
              <option key={index} value={country.alpha2Code}>
                {country.name.common}
              </option>
            ))}
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

        {
          // render ingredients
          ingredients.map((_, index) => (
            <div key={`ingredientName ${index}`}>
              <label htmlFor="quantity">Quantity</label>
              <input
                type="number"
                id="quantity"
                name="quantity"
                onChange={(event) =>
                  handleIngredientQuantityChange(event, index)
                }
                value={ingredients[index].quantity}
              />
              <label htmlFor="unit">Unit</label>
              <input
                type="text"
                id="unit"
                name="unit"
                onChange={(event) => handleIngredientUnitChange(event, index)}
                value={ingredients[index].unit}
              />
              <label htmlFor="ingredientName">ingredient name</label>
              <input
                type="text"
                id="ingredientName"
                name="ingredientName"
                onChange={(event) => handleIngredientNameChange(event, index)}
                value={ingredients[index].ingredientName}
              />
            </div>
          ))
        }
        <button onClick={handleAddMore} type="button">
          Add more
        </button>
        <button type="button" onClick={handleRemoveIngredient}>
          Remove
        </button>

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
