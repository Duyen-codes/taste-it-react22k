import React from "react";
import RecipeCard from "./RecipeCard";
import styles from "./RecipeList.css";

const RecipeList = (props) => {
  console.log("RecipeList:", props);
  return (
    <div className="recipeList">
      <h2>Recipes</h2>
      <input
        type="search"
        onChange={props.onChange}
        value={props.search}
        placeholder="Search recipe..."
      />
      {!props.recipes && <p>Loading...</p>}
      {props.recipes && (
        <ul className="recipe__cards">
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
              // remove={props.remove}
            />
          ))}
        </ul>
      )}
    </div>
  );
};

export default RecipeList;
