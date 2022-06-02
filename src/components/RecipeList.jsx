import React, { useState, useEffect } from "react";
import RecipeCard from "./RecipeCard";
import styles from "./RecipeList.module.css";
import axios from "axios";

const RecipeList = (props) => {
  const [recipes, setRecipes] = useState([]);
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState("");

  // handle search
  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  const filteredRecipes = () => {
    if (search === "") {
      return recipes;
    }
    return recipes.filter((recipe) => {
      return recipe.name.toLowerCase().includes(search.toLowerCase());
    });
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

  const fetchRecipes = async () => {
    const recipeData = await axios.get("http://localhost:3001/recipes");
    setRecipes(recipeData.data);
  };

  const fetchCountries = async () => {
    const countryData = await axios.get("https://restcountries.com/v2/all");
    setCountries(countryData.data);
  };

  useEffect(() => {
    setLoading(true);
    // Promise.all([fetchRecipes(), fetchCountries()]).then(function (results) {
    //   // results is an array of 2 promise objects
    //   console.log(results);
    //   const recipesData = results[0].data;
    //   const countriesData = results[1].data;
    //   setRecipes(recipesData);
    //   setCountries(countriesData);
    //   setLoading(false);
    // }
    // );
    fetchRecipes();
    fetchCountries();
    setLoading(false);
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
        {filteredRecipes().map((recipe) => {
          return (
            <RecipeCard
              key={recipe.id}
              id={recipe.id}
              recipe={recipe}
              country={countries.find(
                (country) =>
                  country.alpha2Code.toLowerCase() ===
                  recipe.origin.toLowerCase()
              )}
              {...recipe}
            />
          );
        })}
      </ul>
    </div>
  );
};

export default RecipeList;
