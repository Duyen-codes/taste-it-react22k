import React from "react";
import Nav from "./Nav";
import { Link } from "react-router-dom";
import styles from "./Header.module.css";

const Header = (props) => {
  const { savedRecipes } = props;

  return (
    <header className={styles.header}>
      <Link to="/">TasteIT</Link>
      <Nav savedRecipes={savedRecipes} />
    </header>
  );
};

export default Header;
