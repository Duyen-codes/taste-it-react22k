import React from "react";
import { Link } from "react-router-dom";
import styles from "./RecipeCard.module.css";

const RecipeCard = (props) => {
  console.log("RecipeCard: ", props);
  return (
    <div className={styles["recipe__card"]}>
      <button onClick={() => props.remove(props.id)}>X</button>
      <img src={props.imageURL} alt="" />
      <div className={styles["recipe__card-content"]}>
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
    </div>
  );
};

export default RecipeCard;
