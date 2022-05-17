import axios from "axios";
import React, { useState, useEffect } from "react";
import { useParams, useLocation, Link } from "react-router-dom";
import styles from "./RecipeSingle.module.css";

const RecipeSingle = (props) => {
  let { id } = useParams();
  const location = useLocation();
  const recipe = location.state.recipe;
  const { country } = location.state;

  return (
    <div className={styles["recipe__single"]}>
      <Link to="/recipes">Go back</Link>
      <h3>{recipe.name}</h3>

      <div>
        <section className={styles["recipe__single-top"]}>
          <img src={recipe.imageURL} alt={recipe.name} />
          <img src={country.flag} alt={country.name} />

          <p>{recipe.description}</p>
        </section>

        <section className={styles["recipe__single-bottom"]}>
          <div>
            <h3>Ingredients</h3>
            {recipe?.ingredients?.map((item) => (
              <li key={item?.ingredientName}>
                {item?.ingredientName} | {item?.quantity}
                {item?.unit}
              </li>
            ))}
          </div>
          <div>
            <h3>Instructions</h3>
            <p>{recipe.instructions}</p>
            <p>{recipe.description}</p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default RecipeSingle;
