import React from "react";
import { NavLink } from "react-router-dom";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { IconButton } from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import styles from "./Nav.module.css";

const Nav = (props) => {
  const { savedRecipes } = props;
  let activeStyle = {
    textDecoration: "underline",
  };

  return (
    <nav className={styles["main-navigation"]}>
      <ul className={styles["visible-desktop"]}>
        <li className={styles["nav-item"]}>
          <NavLink
            to="recipes"
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            Link
          </NavLink>
        </li>
        <li className={styles["nav-item"]}>
          <NavLink
            to="addRecipe"
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            Link
          </NavLink>
        </li>
      </ul>
      <ul>
        <li className={styles["nav-item"]}>
          <NavLink
            to="recipes"
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            Recipes
          </NavLink>
        </li>
        <li className={styles["nav-item"]}>
          <NavLink
            to="addRecipe"
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            Add recipe
          </NavLink>
        </li>
        <li className={styles["nav-item"]}>
          <NavLink
            to="savedRecipes"
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            <IconButton>
              <FavoriteBorderIcon fontSize="large" sx={{ color: "#c2ae94" }} />
            </IconButton>
            {savedRecipes.length > 0 ? savedRecipes.length : ""}
          </NavLink>
        </li>
        <li className={styles["nav-item"]}>
          <NavLink to="/login">
            <IconButton
              sx={{
                color: "#c2ae94",
              }}
            >
              <PersonIcon fontSize="large" />
            </IconButton>{" "}
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
