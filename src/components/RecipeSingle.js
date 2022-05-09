import axios from "axios";
import React, { useState, useEffect, useParams } from "react";

const RecipeSingle = (props) => {
  console.log("from RecipeSingle", props);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios.get(`http://localhost:3001/recipes/${props.id}`).then((res) => {
      console.log("from RecipeSingle", res.data);
      setData(res.data);
    });
  }, []);
  {
    loading && <p>Loading...</p>;
  }
  return (
    <div>
      <h2>Single Recipe</h2>
      <h3>{props.name}</h3>
      {props.id}
    </div>
  );
};

export default RecipeSingle;
