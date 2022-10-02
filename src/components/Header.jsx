import React, { useState } from "react";
import Nav from "./Nav";
import { Link } from "react-router-dom";
import styles from "./Header.module.css";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

const Header = (props) => {
  const { savedRecipes } = props;
  const [isVisible, setIsVisible] = useState(false);

  return (
    <header className={styles["site-header"]}>
      <div className={styles["header-container"]}>
        <button className={styles["mobile-navigation"]}></button>
        {isVisible ? (
          <CloseIcon
            fontSize="large"
            onClick={() => setIsVisible(!isVisible)}
          />
        ) : (
          <MenuIcon fontSize="large" onClick={() => setIsVisible(!isVisible)} />
        )}
        <Link className={styles["main-logo"]} to="/">
          TasteIT
        </Link>
        <Nav savedRecipes={savedRecipes} />
      </div>
      {isVisible && (
        <div className={styles["menu-mobile-overlay"]}>
          <div className={styles["mobile-navigation__menu"]}>
            <ul className={styles["mobile-navigation__menu-items"]}>
              <li>
                <Link to="/Q&A">Q&A</Link>
              </li>
              <li>
                <Link to="contact">Contact</Link>
              </li>
            </ul>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
