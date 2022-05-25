import React from "react";
import { NavLink, Link } from "react-router-dom";
// import backgroundVideo from "../assets/videoBg.mp4";
import styles from "./Home.module.css";

const Home = () => {
  return (
    <div className={styles.home}>
      <div className={styles["home__top"]}>
        <h2>TasteIT</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        <button>
          <NavLink to="recipes">Browse Recipes</NavLink>
        </button>
      </div>

      <div className={styles["home__bottom"]}>
        <h3>Looking for the recipes?</h3>
        <div className={styles["home__cards"]}>
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
            <a
              href="https://www.bc.fi/?gclid=Cj0KCQjwhLKUBhDiARIsAMaTLnEGWdBwQUIi5RJpZKr3tYXluF_oOVdM4OwUqvTsdwaJSv14MnfYjLwaAg6gEALw_wcB"
              target="_blank"
            >
              Business College helsinki
            </a>
          </div>
        </div>
      </div>
      <video autoPlay loop muted>
        <source src="videoBg.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default Home;
