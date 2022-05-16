import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import RecipeList from "./components/RecipeList";
import RecipeForm from "./components/RecipeForm";
import RecipeSingle from "./components/RecipeSingle";
import Header from "./components/Header";
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
    axios.delete(`http://localhost:3001/recipes/${id}`).then(() => {
      const remainedRecipes = recipes.filter((recipe) => {
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

  // const filteredRecipes = recipes.filter((recipe) => {
  //   return recipe.name.toLowerCase().includes(search.toLowerCase());
  // });

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="recipes"
          element={
            <RecipeList
              recipes={recipes}
              onChange={handleSearch}
              remove={handleRemove}
              search={search}
            />
          }
        />
        <Route path="recipes/:id" element={<RecipeSingle />} />
        <Route path="addRecipe" element={<RecipeForm />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
