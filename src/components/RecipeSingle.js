import axios from "axios";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import styles from "./RecipeSingle.module.css";

const RecipeSingle = (props) => {
  console.log("from RecipeSingle", props);
  const [data, setData] = useState([]);
  let { id } = useParams();

  useEffect(() => {
    axios.get(`http://localhost:3001/recipes/${id}`).then((res) => {
      console.log("from RecipeSingle res.data", res.data);
      console.log(
        "from reciplesingle, res.data.ingredients",
        res.data.ingredients
      );
      setData(res.data);
    });
  }, []);

  return (
    <div className={styles["recipe-single"]}>
      <h3>{data.name}</h3>
      {!data && <p>Loading...</p>}
      {data && (
        <div>
          <section className={styles["recipe-single-top"]}>
            <img src={data.imageURL} alt={data.name} />
            <p>{data.description}</p>
          </section>

          <section className={styles["recipe-single-bottom"]}>
            <div>
              <h3>Ingredients</h3>
              {data?.ingredients?.map((item) => (
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
    </div>
  );
};

export default RecipeSingle;
