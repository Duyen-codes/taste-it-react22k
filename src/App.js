import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/pages/Layout";
import Home from "./components/Home";
import Recipes from "./components/Recipes";
import NewRecipe from "./components/NewRecipe";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="recipes" element={<Recipes />} />
          <Route path="addRecipe" element={<NewRecipe />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
