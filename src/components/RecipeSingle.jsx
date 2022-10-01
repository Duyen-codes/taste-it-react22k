import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import styles from "./RecipeSingle.module.css";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";

const RecipeSingle = (props) => {
  const location = useLocation();
  const recipe = location.state.recipe;
  const { country } = location.state;

  const navigate = useNavigate();

  return (
    <div className={styles["recipe__single"]}>
      <button onClick={() => navigate(-1)}>
        <KeyboardBackspaceIcon />
        Go back
      </button>

      <section className={styles["recipe__single-top"]}>
        <div className={styles["image__wrapper"]}>
          <img
            src={recipe.imageURL}
            alt={recipe.name}
            className={styles["recipe-image"]}
          />
          <img
            className={styles["country__flag"]}
            src={country.flag}
            alt={country.name}
          />

          <div className={styles["recipe-header-text"]}>
            <h2 className={styles["recipe-heading"]}>{recipe.name}</h2>
            <div className={styles["recipe-description"]}>
              <p>{recipe.description}</p>
            </div>
          </div>
        </div>
        <div className={styles["recipe-overview"]}></div>
      </section>

      <section className={styles["recipe__single-bottom"]}>
        <div className={styles["recipe-ingredients"]}>
          <h2>
            <span>Ingredients</span>
          </h2>
          <ul>
            {recipe?.ingredients?.map((item) => (
              <li
                key={item?.ingredientName}
                className={styles["recipe__subsection--ingredient"]}
              >
                <span className={styles["recipe-ingredient-amount"]}>
                  {item?.quantity}
                  {item?.unit}
                </span>
                <span className={styles["recipe-ingredient-name"]}>
                  {item?.ingredientName}
                </span>
              </li>
            ))}
          </ul>
        </div>
        <div className={styles["recipe-instructions"]}>
          <h2>Instructions</h2>
          <p>{recipe.instructions}</p>
          <p>{recipe.description}</p>
        </div>
      </section>
    </div>
  );
};

export default RecipeSingle;
