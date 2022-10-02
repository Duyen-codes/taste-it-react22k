import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { IconButton } from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import styles from "./Nav.module.css";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

const Nav = (props) => {
  const { savedRecipes } = props;
  let activeStyle = {
    textDecoration: "underline",
  };

  const [isOpen, setIsOpen] = useState(false);

  const handleNavItemClick = () => {
    setIsOpen(!isOpen);
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
        <li
          className={`${styles["nav-item"]} ${styles["user-info-item"]} ${
            isOpen ? `${styles["nav-item--open"]}` : ""
          }`}
          onClick={handleNavItemClick}
        >
          <div className={styles["main-navi-user-info-icon-container"]}>
            <IconButton
              sx={{
                color: "#c2ae94",
              }}
            >
              <PersonIcon fontSize="large" />
            </IconButton>{" "}
          </div>
          <span className={styles["main-navi-item-description"]}>
            <span className={styles["login"]}>Login</span>
            <KeyboardArrowDownIcon
              className={styles["down-arrow"]}
              fontSize="large"
            />
          </span>

          <div className={styles["menu-mobile-overlay"]}>
            {isOpen && (
              <nav id={styles["profile-menu"]}>
                <ul>
                  <li className={styles["menu-item"]}>
                    <div className={styles["login-controls"]}>
                      <NavLink
                        to="/login"
                        type="button"
                        className={`${styles["btn"]} ${styles["btn--primary"]} ${styles["login-button"]} `}
                      >
                        Login
                      </NavLink>
                      <NavLink
                        to="/register"
                        className={`${styles["btn"]} ${styles["btn--borderless"]} ${styles["register-button"]} `}
                      >
                        Register
                      </NavLink>
                    </div>
                  </li>
                </ul>
              </nav>
            )}
          </div>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
