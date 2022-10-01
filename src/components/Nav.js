import React from "react";
import { NavLink } from "react-router-dom";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { IconButton } from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";

const Nav = (props) => {
  const { savedRecipes } = props;
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
            Add recipe
          </NavLink>
        </li>
        <li>
          <NavLink
            to="savedRecipes"
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            <IconButton>
              <FavoriteBorderIcon fontSize="large" sx={{ color: "#c2ae94" }} />
            </IconButton>
            Saved recipes {savedRecipes.length > 0 ? savedRecipes.length : ""}
          </NavLink>
        </li>
        <li>
          <NavLink to="/login">
            <IconButton
              sx={{
                color: "#c2ae94",
              }}
            >
              <PersonIcon fontSize="large" />
            </IconButton>{" "}
            Login
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
