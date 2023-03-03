import React from "react";

import CartContext from "./cart-context";

function CartProvider(props) {
  function addItemToCartHanlder(item) {}

  function removeItemFromCartHanlder(id) {}

  const cartContext = {
    items: [],
    totalAmount: 0,
    addItem: addItemToCartHanlder,
    removeItem: removeItemFromCartHanlder,
  };
  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
}

export default CartProvider;
