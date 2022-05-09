import React from "react";
import RecipeCard from "./RecipeCard";

const RecipeList = (props) => {
  return (
    <div>
      Recipe list
      <form action="">
        <label htmlFor="search-recipe">Search for recipe:</label>
        <input type="text" />
      </form>
      <h3>Our recipes/ Recipe List</h3>
      <RecipeCard />
    </div>
  );
};

export default RecipeList;
