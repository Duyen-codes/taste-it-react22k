import React, { useState, useEffect } from "react";
import RecipeCard from "./RecipeCard";
import styles from "./RecipeList.module.css";

const RecipeList = (props) => {
  const [recipes, setRecipes] = useState([]);
  const [countries, setCountries] = useState([]);
  const [search, setSearch] = useState("");

  // set search query to empty string
  const handleSearch = (e) => {
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
  useEffect(() => {
    axios.get("http://localhost:3001/recipes").then((response) => {
      setRecipes(response.data);
    });
  }, []);

  // const filteredRecipes = recipes.filter((recipe) => {
  //   return recipe.name.toLowerCase().includes(search.toLowerCase());
  // });

  return (
    <div className={styles.recipeList}>
      <h2>Recipes</h2>
      <input
        type="search"
        onChange={props.onChange}
        value={props.search}
        placeholder="Search recipe..."
      />
      {!props.recipes && <p>Loading...</p>}
      {props.recipes && (
        <ul className={styles.recipe__cards}>
          {props.recipes.map((item) => (
            <RecipeCard
              key={item.id}
              id={item.id}
              name={item.name}
              author={item.author}
              origin={item.origin}
              description={item.description}
              imageURL={item.imageURL}
              ingredients={item.ingredients}
              instructions={item.instructions}
              remove={props.remove}
            />
          ))}
        </ul>
      )}
    </div>
  );
};

export default RecipeList;
