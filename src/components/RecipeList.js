import React, { useState, useEffect } from "react";
import RecipeCard from "./RecipeCard";
import styles from "./RecipeList.module.css";
import axios from "axios";

const RecipeList = (props) => {
  const [recipes, setRecipes] = useState([]);
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState("");

  // set search query to empty string
  const handleSearch = (e) => {
    console.log("changed");
    const filteredRecipes = recipes.filter((recipe) => {
      return recipe.name.toLowerCase().includes(search.toLowerCase());
    });
    setSearch(e.target.value);
  };

  // handle remove
  const handleRemove = (id) => {
    axios.delete(`http://localhost:3001/recipes/${id}`).then(() => {
      const remainedRecipes = recipes.filter((recipe) => {
        return recipe.id !== id;
      });
      setRecipes(remainedRecipes);
    });
  };

  // fetch data from json server and render on page
  // useEffect(() => {
  //   axios.get("http://localhost:3001/recipes").then((response) => {
  //     setRecipes(response.data);
  //   });
  // }, []);

  const fetchRecipes = () => axios.get("http://localhost:3001/recipes");
  const fetchCountries = () => axios.get("https://restcountries.com/v2/all");

  useEffect(() => {
    setLoading(true);
    Promise.all([fetchRecipes(), fetchCountries()]).then(function (results) {
      // results is an array of 2 promise objects
      const recipesData = results[0].data;
      const countriesData = results[1].data;
      setRecipes(recipesData);
      setCountries(countriesData);
      setLoading(false);
    });
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }
  return (
    <div className={styles.recipeList}>
      <h2>Recipes</h2>
      <input
        type="search"
        onChange={handleSearch}
        value={search}
        placeholder="Search recipe..."
      />
      <ul className={styles.recipe__cards}>
        {recipes.map((recipe) => (
          <RecipeCard
            key={recipe.id}
            id={recipe.id}
            recipe={recipe}
            country={countries.find(
              (country) => country.alpha2Code === recipe.origin
            )}
            {...recipe}
          />
        ))}
      </ul>
    </div>
  );
};

export default RecipeList;
