import React from "react";
import { NavLink } from "react-router-dom";

const Nav = () => {
  let activeStyle = {
    textDecoration: "underline",
  };

  return (
    <nav>
      <ul>
        <li>
          <NavLink
            to="/"
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="recipes"
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            Recipes
          </NavLink>
        </li>
        <li>
          <NavLink
            to="addRecipe"
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            Add new recipe
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
