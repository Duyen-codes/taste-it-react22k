import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/pages/Layout";
import Home from "./components/Home";
import RecipeList from "./components/RecipeList";
import AddNewRecipe from "./components/AddNewRecipe";
import RecipeSingle from "./components/RecipeSingle";
import axios from "axios";

const App = () => {
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
    axios
      .get("http://localhost:3001/recipes")
      .then((response) => {
        setRecipes(response.data);
      })
      .catch((error) => console.log("axios get error:", error));
  }, []);

  const filteredRecipes = recipes.filter((recipe) => {
    return recipe.name.toLowerCase().includes(search.toLowerCase());
  });

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
          <Route path="recipes/:recipeId" element={<RecipeSingle />} />
          <Route
            path="addRecipe"
            element={<AddNewRecipe addRecipes={setRecipes} />}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
