import React from "react";
import Nav from "./Nav";
import { Link } from "react-router-dom";
import styles from "./Header.module.css";
import MenuIcon from "@mui/icons-material/Menu";

const Header = (props) => {
  const { savedRecipes } = props;

  return (
    <header className={styles["site-header"]}>
      <div className={styles["header-container"]}>
        <button className={styles["mobile-navigation"]}>
          <MenuIcon fontSize="large" />
        </button>
        <Link className={styles["main-logo"]} to="/">
          TasteIT
        </Link>
        <Nav savedRecipes={savedRecipes} />
      </div>
    </header>
  );
};

export default Header;
