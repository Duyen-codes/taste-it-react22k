import React from "react";
import { Link } from "react-router-dom";
import styles from "./RecipeCard.css";

const RecipeCard = (props) => {
  console.log("from recipeCard props", props);

  return (
    <div className="recipe__card">
      <button onClick={() => props.remove(props.id)}>X</button>
      <p>{props.name}</p>
      <p>{props.description}</p>
      <Link
        to={`${props.id}`}
        state={{
          name: props.name,
          author: props.author,
          origin: props.origin,
          description: props.description,
          imageURL: props.imageURL,
          ingredients: props.ingredients,
          instructions: props.instructions,
        }}
      >
        See more
      </Link>
    </div>
  );
};

export default RecipeCard;
