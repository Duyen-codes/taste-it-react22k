import React from "react";
import { Link } from "react-router-dom";
import styles from "./RecipeCard.module.css";
import ClearIcon from "@mui/icons-material/Clear";
import { IconButton } from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

const RecipeCard = ({
  name,
  description,
  imageURL,
  country,
  recipe,
  handleRemove,
  id,
}) => {
  const handleSaveRecipes = () => {
    console.log("click saved");
  };
  return (
    <div className={styles["recipe__card"]}>
      <IconButton
        className={styles.removeButton}
        onClick={() => handleRemove(id)}
        sx={{ position: "absolute", color: "#a18f79", top: "0", right: "0" }}
      >
        <ClearIcon fontSize="large" />
      </IconButton>

      <img src={imageURL} alt={name} />
      <img
        src={country?.flags.svg}
        alt={country?.name}
        className={styles["country__flag"]}
      />
      <span
        style={{
          display: "flex",
          justifyContent: "flex-end",
          padding: "0 1rem",
        }}
      >
        <FavoriteBorderIcon
          sx={{ fontSize: "3rem", cursor: "pointer" }}
          onClick={() => handleSaveRecipes()}
        />
      </span>

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
    </div>
  );
};

export default RecipeCard;
