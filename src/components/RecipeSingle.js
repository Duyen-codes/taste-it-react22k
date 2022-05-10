import axios from "axios";
import React, { useState, useEffect } from "react";
import { useParams, useLocation } from "react-router-dom";
import styles from "./RecipeSingle.module.css";

const RecipeSingle = (props) => {
  // const [state, setData] = useState([]);
  let { id } = useParams();
  const location = useLocation();
  const state = location.state;
  console.log("state", state);

  // useEffect(() => {
  //   axios.get(`http://localhost:3001/recipes/${id}`).then((res) => {
  //     console.log("from RecipeSingle res.data", res.data);
  //     console.log(
  //       "from reciplesingle, res.data.ingredients",
  //       res.data.ingredients
  //     );
  //     setData(res.data);
  //   });
  // }, []);

  return (
    <div className={styles["recipe-single"]}>
      <h3>{state.name}</h3>
      {!state && <p>Loading...</p>}
      {state && (
        <div>
          <section className={styles["recipe-single-top"]}>
            <img src={state.imageURL} alt={state.name} />
            <p>{state.description}</p>
          </section>

          <section className={styles["recipe-single-bottom"]}>
            <div>
              <h3>Ingredients</h3>
              {state?.ingredients?.map((item) => (
                <li key={item.ingredientName}>
                  {item.ingredientName} | {item.quantity}
                  {item.unit}
                </li>
              ))}
            </div>
            <div>
              <h3>Instructions</h3>
              <p>{state.instructions}</p>
              <p>{state.description}</p>
            </div>
          </section>
        </div>
      )}
    </div>
  );
};

export default RecipeSingle;
