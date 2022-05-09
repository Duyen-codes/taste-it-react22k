import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <h2>TasteIT</h2>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
      <button>
        <Link to="recipes">Browse Recipes</Link>
      </button>
    </div>
  );
};

export default Home;
