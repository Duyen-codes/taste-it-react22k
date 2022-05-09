import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">tasteIT</Link>
        </li>
        <li>
          <Link to="recipes">Recipes</Link>
        </li>
        <li>
          <Link to="favList">FavList</Link>
        </li>
        <li>
          <Link to="addRecipe">Add new recipe</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
