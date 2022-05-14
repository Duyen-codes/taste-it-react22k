import React from "react";
import Nav from "./Nav";
import { Link } from "react-router-dom";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <header className={styles.header}>
      <Link to="/">TasteIT</Link>
      <Nav />
    </header>
  );
};

export default Header;
