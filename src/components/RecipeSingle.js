import axios from "axios";
import React, { useState, useEffect } from "react";

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

  return (
    <div>
      <h2>Single Recipe</h2>
      {!data && <p>Loading...</p>}
      {data && (
        <div>
          <img src={data.imageURL} alt={data.name} />
          <h3>{data.name}</h3>
          <p>{data.instructions}</p>
          <p>{data.description}</p>
        </div>
      )}

      {props.id}
    </div>
  );
};

export default RecipeSingle;
