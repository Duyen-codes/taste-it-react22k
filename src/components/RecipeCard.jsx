import React from "react";
import { Link } from "react-router-dom";
import styles from "./RecipeCard.module.css";

const RecipeCard = ({
  name,
  description,
  imageURL,
  country,
  recipe,
  remove,
  id,
}) => {
  return (
    <div className={styles["recipe__card"]}>
      <button onClick={() => remove(id)}>X</button>
      <img src={imageURL} alt={name} />
      <img
        src={country?.flags.svg}
        alt={country?.name}
        className={styles["country__flag"]}
      />
      <div className={styles["recipe__card-content"]}>
        <h2>{name}</h2>
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
