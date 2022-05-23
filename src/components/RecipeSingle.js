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
            <h2>
              <span>Ingredients</span>
            </h2>
            <ul>
              {recipe?.ingredients?.map((item) => (
                <li
                  key={item?.ingredientName}
                  className={styles["recipe__subsection--ingredient"]}
                >
                  <span className={styles["recipe__ingredient--amount"]}>
                    {item?.ingredientName}
                  </span>
                  <span>
                    {item?.quantity}
                    {item?.unit}
                  </span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2>Instructions</h2>
            <p>{recipe.instructions}</p>
            <p>{recipe.description}</p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default RecipeSingle;
