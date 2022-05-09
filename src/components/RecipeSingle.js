import axios from "axios";
import React, { useState, useEffect } from "react";

const RecipeSingle = (props) => {
  console.log("from RecipeSingle", props);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios.get(`http://localhost:3001/recipes/${props.id}`).then((res) => {
      console.log("from RecipeSingle res.data", res.data);
      console.log(
        "from reciplesingle, res.data.ingredients",
        res.data.ingredients
      );
      setData(res.data);
    });
  }, []);

  return (
    <>
      <h3>{data.name}</h3>
      {!data && <p>Loading...</p>}
      {data && (
        <div>
          <img src={data.imageURL} alt={data.name} />
          <section className="content-wrapper">
            <div>
              <h3>Ingredients</h3>
              {data.ingredients?.map((item) => (
                <li key={item.ingredientName}>
                  {item.ingredientName} | {item.quantity}
                  {item.unit}
                </li>
              ))}
            </div>
            <div>
              <h3>Instructions</h3>
              <p>{data.instructions}</p>
              <p>{data.description}</p>
            </div>
          </section>
        </div>
      )}
    </>
  );
};

export default RecipeSingle;
