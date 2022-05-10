import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/pages/Layout";
import Home from "./components/Home";
import RecipeList from "./components/RecipeList";
import AddNewRecipe from "./components/AddNewRecipe";
import RecipeSingle from "./components/RecipeSingle";
import axios from "axios";

const App = () => {
  const [inputData, setInputData] = useState({
    name: "",
    author: "",
    origin: "",
    description: "",
    imageURL: "",
    instructions: "",
  });

  const [ingredients, setIngredients] = useState([
    {
      quantity: "",
      unit: "",
      ingredientName: "",
    },
  ]);

  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");

  // set search query to empty string
  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  // handle remove
  const handleRemove = (id) => {
    console.log("handle remove", id);
    axios.delete(`http://localhost:3001/recipes/${id}`).then(() => {
      const remainedRecipes = recipes.filter((recipe) => {
        console.log(recipe.id);
        return recipe.id !== id;
      });
      setRecipes(remainedRecipes);
    });
  };

  // fetch data from json server and render on page
  useEffect(() => {
    axios.get("http://localhost:3001/recipes").then((response) => {
      setRecipes(response.data);
    });
  }, []);

  const filteredRecipes = recipes.filter((recipe) => {
    return recipe.name.toLowerCase().includes(search.toLowerCase());
  });

  // Handle form input change
  const handleInputChange = (event) => {
    console.log("handle input change");
  };

  // Handle ingredient change
  const handleIngredientChange = (e) => {
    console.log("handle ingredient change");
  };

  // handle add more ingredient fields

  const handleAddMore = (e) => {
    console.log("add more clicked");
  };
  //
  // Handle post recipe

  const handleSubmit = (event) => {
    console.log("handle submit clicked");
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
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route
            path="recipes"
            element={
              <RecipeList
                recipes={filteredRecipes}
                onChange={handleSearch}
                remove={handleRemove}
                search={search}
              />
            }
          />
          <Route path="recipes/:id" element={<RecipeSingle />} />
          <Route
            path="addRecipe"
            element={
              <AddNewRecipe
                onChange={handleInputChange}
                onIngredientChange={handleIngredientChange}
                onSubmit={handleSubmit}
                {...inputData}
                addMore={handleAddMore}
              />
            }
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
