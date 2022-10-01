import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import RecipeList from "./components/RecipeList";
import RecipeForm from "./components/RecipeForm";
import RecipeSingle from "./components/RecipeSingle";
import Header from "./components/Header";
import SavedRecipes from "./components/SavedRecipes";

const App = () => {
  const [savedRecipes, setSavedRecipes] = useState([]);
  const [recipes, setRecipes] = useState([]);
  const [countries, setCountries] = useState([]);

  const handleSaveRecipes = (id) => {
    const savedRecipe = recipes.find((recipe) => recipe.id === id);
    const newList = savedRecipes.concat(savedRecipe);
    setSavedRecipes(newList);
  };

  const handleUnSaveRecipes = (id) => {
    const newList = savedRecipes.filter((recipe) => recipe.id !== id);
    setSavedRecipes(newList);
  };
  return (
    <BrowserRouter>
      <Header savedRecipes={savedRecipes} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="recipes"
          element={
            <RecipeList
              savedRecipes={savedRecipes}
              recipes={recipes}
              setRecipes={setRecipes}
              setSavedRecipes={setSavedRecipes}
              handleSaveRecipes={handleSaveRecipes}
              countries={countries}
              setCountries={setCountries}
              handleUnSaveRecipes={handleUnSaveRecipes}
            />
          }
        />
        <Route path="recipes/:id" element={<RecipeSingle />} />
        <Route path="addRecipe" element={<RecipeForm />} />
        <Route
          path="savedRecipes"
          element={
            <SavedRecipes
              savedRecipes={savedRecipes}
              setSavedRecipes={setSavedRecipes}
              countries={countries}
              handleUnSaveRecipes={handleUnSaveRecipes}
              handleSaveRecipes={handleSaveRecipes}
            />
          }
        />
        <Route path="savedRecipes/:name" element={<RecipeSingle />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
