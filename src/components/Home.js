import React from "react";
import { NavLink, Link } from "react-router-dom";
import backgroundVideo from "../assets/videoBg.mp4";

const Home = () => {
  return (
    <div className="home">
      <div className="home__top">
        <h2>TasteIT</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        <button>
          <NavLink to="recipes">Browse Recipes</NavLink>
        </button>
      </div>

      <div className="home__bottom">
        <h3>Looking for the recipes?</h3>
        <div className="home-cards">
          <div>
            <h4>Browse recipes</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor,
              amet.
            </p>
            <Link to="recipes">All recipes</Link>
          </div>

          <div>
            <h4>Add recipes</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor,
              amet.
            </p>
            <Link to="addRecipe">Add recipes</Link>
          </div>
          <div>
            <h4>Want to know more about our projects?</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor,
              amet.
            </p>
            <a href="">Business College helsinki</a>
          </div>
        </div>
      </div>
      <video autoPlay loop muted>
        <source src={null ?? backgroundVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default Home;
