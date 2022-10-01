import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import RecipeList from "./components/RecipeList";
import RecipeForm from "./components/RecipeForm";
import RecipeSingle from "./components/RecipeSingle";
import Header from "./components/Header";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="recipes" element={<RecipeList />} />
        <Route path="recipes/:id" element={<RecipeSingle />} />
        <Route path="addRecipe" element={<RecipeForm />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
