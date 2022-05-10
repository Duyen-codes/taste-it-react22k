import React from "react";
import { Link } from "react-router-dom";
import styles from "./RecipeCard.css";

const RecipeCard = (props) => {
  console.log("from recipeCard", props);
  return (
    <div className="recipe__card">
      <button onClick={props.remove}>X</button>
      <p>{props.name}</p>
      <p>{props.description}</p>
      <Link to={`/recipes/${props.id}`} state={{ ...props }}>
        See more
      </Link>
    </div>
  );
};

export default RecipeCard;
