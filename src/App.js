import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, useParams } from "react-router-dom";
import Layout from "./components/pages/Layout";
import Home from "./components/Home";
import RecipeList from "./components/RecipeList";
import AddNewRecipe from "./components/AddNewRecipe";
import RecipeSingle from "./components/RecipeSingle";
import axios from "axios";

const RouterWrapper = (props) => {
  const { id } = useParams();
  return <RecipeSingle id={id} {...props} />;
};

const App = (props) => {
  const [inputData, setInputData] = useState({
    name: "",
    author: "",
    country: "",
    description: "",
    imageURL: "",
    ingredients: {
      quantity: "",
      unit: "",
      ingredient: "",
    },
    instructions: "",
  });
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3001/recipes").then((response) => {
      console.log("from App.js", response.data);
      setRecipes(response.data);
    });
  }, []);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="recipes" element={<RecipeList recipes={recipes} />} />
          <Route path="recipes/:id" element={<RouterWrapper />} />
          <Route path="addRecipe" element={<AddNewRecipe />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
