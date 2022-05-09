import axios from "axios";
import React, { useState, useEffect } from "react";

const RecipeSingle = (props) => {
  console.log(props);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios
      .get(`http://localhost:3000/recipes/${props.params.recipe}`)
      .then((res) => {
        console.log(res.data);
        setData(res.data);
      });
  });
  return (
    <div>
      <h2>Single Recipe</h2>
      <h3>{props.name}</h3>
      <img src="" alt="" />
      <p>Recipe description: {props.description}</p>
      <p>Author: {props.author}</p>
      <p>Ingredients</p>
      <p>Preparation</p>
    </div>
  );
};

export default RecipeSingle;
