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
    ingredients: [
      {
        quantity: "",
        unit: "",
        ingredientName: "",
      },
    ],
    instructions: "",
  });
  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");

  // set search query to empty string
  const handleSearch = (e) => {
    console.log("handleSearch:", e.target.value);
    setSearch(e.target.value);
  };

  useEffect(() => {
    axios.get("http://localhost:3001/recipes").then((response) => {
      // console.log("from App.js", response.data);
      setRecipes(response.data);
    });
  }, []);

  const filteredRecipes = recipes.filter((recipe) => {
    return recipe.name.toLowerCase().includes(search.toLowerCase());
  });

  const handleInputChange = (e) => {
    console.log("handle change");
    setInputData({ ...inputData, [e.target.name]: e.target.value });
  };

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
                onSubmit={handleSubmit}
                {...inputData}
              />
            }
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
