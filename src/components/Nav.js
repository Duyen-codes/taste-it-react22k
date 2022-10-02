import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { IconButton } from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import styles from "./Nav.module.css";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import AddIcon from "@mui/icons-material/Add";

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
            to="/"
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            Healthy
          </NavLink>
        </li>
        <li className={styles["nav-item"]}>
          <NavLink
            to="/"
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            Dinner
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
            className={styles["main-navi-link"]}
            to="addRecipe"
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            <IconButton>
              <AddIcon fontSize="large" sx={{ color: "#c2ae94" }} />
            </IconButton>
            <span className={styles["main-navi-item-description"]}>
              <span className={styles["add-recipes"]}> Add recipes</span>
            </span>
          </NavLink>
        </li>
        <li
          className={`${styles["nav-item"]} ${styles["favorites-nav-item"]} `}
        >
          <NavLink
            to="savedRecipes"
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
            className={styles["main-navi-link"]}
          >
            <IconButton>
              <FavoriteBorderIcon fontSize="large" sx={{ color: "#c2ae94" }} />
            </IconButton>

            <span className={styles["main-navi-item-description"]}>
              <span className={styles["favorites"]}>
                Favorites {savedRecipes.length > 0 ? savedRecipes.length : ""}
              </span>
            </span>
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
