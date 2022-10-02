import React from "react";
import Nav from "./Nav";
import { Link } from "react-router-dom";
import styles from "./Header.module.css";

const Header = (props) => {
  const { savedRecipes } = props;

  return (
    <header className={styles["site-header"]}>
      <NavLink
        className={styles["main-logo"]}
        to="/"
        style={({ isActive }) => (isActive ? activeStyle : undefined)}
      >
        TasteIT
      </NavLink>
      <Nav savedRecipes={savedRecipes} />
    </header>
  );
};

export default Header;
