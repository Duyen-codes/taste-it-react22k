import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, useParams } from "react-router-dom";
import Layout from "./components/pages/Layout";
import Home from "./components/Home";
import RecipeList from "./components/RecipeList";
import AddNewRecipe from "./components/AddNewRecipe";
import Recipe from "./components/RecipeSingle";

const RouterWrapper = (props) => {
  const params = useParams();
  return <Recipe params={params} {...props} />;
};
const App = () => {
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

  useEffect(() => {}, []);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="recipes" element={<RecipeList />} />
          <Route path="recipes/:recipe" element={<RouterWrapper />} />
          <Route path="addRecipe" element={<AddNewRecipe />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
