import React from "react";

import classes from "./MealItem.module.css";
import MealItemForm from "./MealItemForm";

function MealItem(props) {
  const price = `$${props.meatPrice.toFixed(2)}`;

  return (
    <li className={classes.meal}>
      <div>
        <h3>{props.meatName}</h3>
        <div className={classes.description}>{props.meatDescription}</div>
        <div className={classes.price}>{price}</div>
      </div>
      <div>
        <MealItemForm id={props.id} />
      </div>
    </li>
  );
}
export default MealItem;
