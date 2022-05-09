import React from "react";
import { Link } from "react-router-dom";

const RecipeCard = (props) => {
  console.log("from recipeCard", props.id);
  return (
    <div className="recipe-card">
      <p>{props.name}</p>
      <p>{props.description}</p>
      <Link to={`/recipes/${props.id}`}>See more</Link>
    </div>
  );
};

export default RecipeCard;
