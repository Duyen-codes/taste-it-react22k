import React from "react";
import RecipeCard from "./RecipeCard";

const RecipeList = (props) => {
  return (
    <div>
      <h2>Recipe list</h2>
      <form action="">
        <label htmlFor="search-recipe">Search for recipe:</label>
        <input type="text" />
      </form>
      <h3>Our recipes/ Recipe List</h3>
      {!props.recipes && <p>Loading...</p>}
      {props.recipes && (
        <ul className="recipe-cards">
          {props.recipes.map((item) => (
            <RecipeCard
              key={item.id}
              name={item.name}
              author={item.author}
              country={item.country}
              description={item.description}
              imageURL={item.imageURL}
              ingredients={item.ingredients}
              instructions={item.instructions}
            />
          ))}
        </ul>
      )}
    </div>
  );
};

export default RecipeList;
