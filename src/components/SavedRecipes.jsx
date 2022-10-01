import React from "react";
import RecipeCard from "./RecipeCard";
import styles from "./RecipeCard.module.css";
import classes from "./RecipeList.module.css";

const SavedRecipes = (props) => {
  const { savedRecipes, countries, handleSaveRecipes, handleUnSaveRecipes } =
    props;
  console.log("savedRecipes component", savedRecipes);
  return (
    <div>
      <h2> Saved Recipes</h2>
      <div className={classes.recipe__cards}>
        {savedRecipes &&
          savedRecipes.map((savedRecipe) => {
            return (
              <RecipeCard
                key={savedRecipe.id}
                recipe={savedRecipe}
                country={countries.find(
                  (country) =>
                    country.alpha2Code.toLowerCase() ===
                    savedRecipe.origin.toLowerCase()
                )}
                className={styles["recipe__card"]}
                handleSaveRecipes={handleSaveRecipes}
                handleUnSaveRecipes={handleUnSaveRecipes}
                savedRecipes={savedRecipes}
              />
            );
          })}
      </div>
    </div>
  );
};

export default SavedRecipes;
