import React from "react";
import { Link } from "react-router-dom";

const RecipeCard = ({
  name,
  author,
  country,
  description,
  imageURL,
  ingredients,
  instructions,
}) => {
  return (
    <div className="recipe-card">
      <p>{name}</p>
      <p>{description}</p>
      <Link to={name}>See more</Link>
    </div>
  );
};

export default RecipeCard;
