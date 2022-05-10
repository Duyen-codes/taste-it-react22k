import React from "react";
import Nav from "./Nav";
import { Link } from "react-router-dom";
import styles from "./Header.css";

const Header = () => {
  return (
    <header className="header">
      <Link to="/">TasteIT</Link>
      <Nav />
    </header>
  );
};

export default Header;
