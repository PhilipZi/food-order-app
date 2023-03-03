import React, { useContext } from "react";

import CartContext from "../../store/CartContext";
import classes from "./MealItem.module.css";
import MealItemForm from "./MealItemForm";

function MealItem(props) {
  const cartCtx = useContext(CartContext);
  const price = `$${props.meatPrice.toFixed(2)}`;

  function addToCartHandler(amount) {
    cartCtx.addItem({
      id: props.id,
      name: props.name,
      amount: amount,
      price: props.price,
    });
  }

  return (
    <li className={classes.meal}>
      <div>
        <h3>{props.meatName}</h3>
        <div className={classes.description}>{props.meatDescription}</div>
        <div className={classes.price}>{price}</div>
      </div>
      <div>
        <MealItemForm onAddToCart={addToCartHandler} />
      </div>
    </li>
  );
}
export default MealItem;
