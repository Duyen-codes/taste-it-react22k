import React from "react";
import { Link } from "react-router-dom";
import styles from "./RecipeCard.module.css";

const RecipeCard = ({
  name,
  description,
  imageURL,
  ingredients,
  instructions,
  country,
  recipe,
  remove,
  id,
}) => {
  return (
    <div className={styles["recipe__card"]}>
      <button onClick={() => remove(id)}>X</button>
      <img src={imageURL} alt="" />
      <div className={styles["recipe__card-content"]}>
        <p>{name}</p>
        <p>{description}</p>
        <Link
          to={`${id}`}
          state={{
            recipe: recipe,
            country: country,
          }}
        >
          See more
        </Link>
      </div>
    </div>
  );
};

export default RecipeCard;
