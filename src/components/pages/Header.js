import React from "react";
import Nav from "./Nav";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <Link to="/">TasteIT</Link>
      <Nav />
    </header>
  );
};

export default Header;
