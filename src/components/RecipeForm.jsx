import React, { useState, useEffect } from "react";
import styles from "./RecipeForm.module.css";
import axios from "axios";

const AddNewRecipe = (props) => {
  // Countries state for saving data from RESTcountries API
  const [countries, setCountries] = useState([]);

  /// fetch countries data
  useEffect(() => {
    const fetchCountries = async () => {
      const response = await axios.get("https://restcountries.com/v3.1/all");
      setCountries(response.data);
    };
    fetchCountries();
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
  const handleIngredientChange = (e, ingredientIndex) => {
    setIngredients(
      ingredients.map((ingredient, index) => {
        if (index === ingredientIndex) {
          return {
            ...ingredient,
            [e.target.name]: e.target.value,
          };
        }
        return ingredient;
      })
    );
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    await axios
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
    setIngredients([{ quantity: "", unit: "", ingredientName: "" }]);
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
    if (ingredients.length > 1) {
      const ingredientStore = [...ingredients];
      ingredientStore.pop();
      setIngredients(ingredientStore);
    }
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
          <label htmlFor="origin">Recipe's origin:</label>
          <select name="origin" id="origin" onChange={handleChange}>
            {countries
              .sort((a, b) => a.name.common.localeCompare(b.name.common))
              .map((country) => {
                return (
                  <option key={country.cca2} value={country.cca2}>
                    {country.name.common}
                  </option>
                );
              })}
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
        {ingredients.map((ingredient, index) => {
          console.log(ingredient);
          return (
            <div key={index}>
              <label htmlFor="ingredientName">ingredient name</label>
              <input
                type="text"
                id="ingredientName"
                name="ingredientName"
                onChange={(event) => handleIngredientChange(event, index)}
                value={ingredients[index].ingredientName}
              />
              <label htmlFor="quantity">Quantity</label>
              <input
                type="number"
                id="quantity"
                name="quantity"
                onChange={(event) => handleIngredientChange(event, index)}
                value={ingredients[index].quantity}
              />
              <label htmlFor="unit">Unit</label>
              <input
                type="text"
                id="unit"
                name="unit"
                onChange={(event) => handleIngredientChange(event, index)}
                value={ingredients[index].unit}
              />
            </div>
          );
        })}
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
        <button type="submit">Post recipe</button>
      </form>
    </div>
  );
};

export default AddNewRecipe;
