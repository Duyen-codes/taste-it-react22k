import React from "react";
import RecipeCard from "./RecipeCard";

const RecipeList = (props) => {
  console.log("RecipeList:", props);
  return (
    <div>
      <h2>Recipe list</h2>

      <label htmlFor="search-recipe">Search for recipe:</label>
      <input
        type="search"
        onChange={props.onChange}
        value={props.search}
        placeholder="Search recipe..."
      />

      <h3>Our recipes/ Recipe List</h3>
      {!props.recipes && <p>Loading...</p>}
      {props.recipes && (
        <ul className="recipe-cards">
          {props.recipes.map((item) => (
            <RecipeCard
              key={item.id}
              id={item.id}
              name={item.name}
              author={item.author}
              origin={item.origin}
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
