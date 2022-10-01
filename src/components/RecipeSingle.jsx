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
      <h2>{recipe.name}</h2>
      <div>
        <section className={styles["recipe__single-top"]}>
          <div className={styles["image__wrapper"]}>
            <img src={recipe.imageURL} alt={recipe.name} />
            <img
              className={styles["country__flag"]}
              src={country.flag}
              alt={country.name}
            />
          </div>
          <div>
            <h3>Description</h3>
            <p>{recipe.description}</p>
          </div>
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
