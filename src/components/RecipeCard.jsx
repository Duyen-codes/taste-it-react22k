import React from "react";
import { Link } from "react-router-dom";
import styles from "./RecipeCard.module.css";
import ClearIcon from "@mui/icons-material/Clear";
import { IconButton } from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";

const RecipeCard = (props) => {
  const {
    recipe,
    handleRemove,
    handleSaveRecipes,
    country,
    savedRecipes,
    handleUnSaveRecipes,
  } = props;
  const { imageURL, id, name, description } = props.recipe;

  const handleClickSave = (id) => {
    handleSaveRecipes(id);
  };

  const handleClickUnsave = (id) => {
    handleUnSaveRecipes(id);
  };

  return (
    <li className={styles["recipe__card"]}>
      <IconButton
        className={styles.removeButton}
        onClick={() => handleRemove(id)}
        sx={{ position: "absolute", color: "#a18f79", top: "0", right: "0" }}
      >
        <ClearIcon fontSize="large" />
      </IconButton>
      <img
        src={
          imageURL.includes("http")
            ? imageURL
            : "https://source.unsplash.com/1600x900/?food"
        }
        alt={name}
      />
      <img
        src={country?.flags.svg}
        alt={country?.name}
        className={styles["country__flag"]}
      />
      {savedRecipes.includes(recipe) ? (
        <span
          onClick={() => handleClickUnsave(id)}
          style={{
            display: "flex",
            justifyContent: "flex-end",
            padding: "0 1rem",
          }}
        >
          <FavoriteIcon
            sx={{ fontSize: "3rem", cursor: "pointer", color: "#a18f79" }}
          />
        </span>
      ) : (
        <span
          onClick={() => handleClickSave(id)}
          style={{
            display: "flex",
            justifyContent: "flex-end",
            padding: "0 1rem",
            backgroundColor: "transparent",
          }}
        >
          <FavoriteBorderIcon sx={{ fontSize: "3rem", cursor: "pointer" }} />
        </span>
      )}

      <div className={styles["recipe__card-content"]}>
        <h2>{name}</h2>
        <p>{description}</p>
        <Link
          to={`${name}`}
          state={{
            recipe: recipe,
            country: country,
          }}
        >
          See more
        </Link>
      </div>
    </li>
  );
};

export default RecipeCard;
