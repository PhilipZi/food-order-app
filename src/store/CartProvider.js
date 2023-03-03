import React, { useReducer } from "react";

import CartContext from "./CartContext";

const defaultCartState = {
  items: [],
  totalAmount: 0,
};

function cartReducer(state, action) {
  if (action.type === "ADD") {
    const updatedItems = state.items.concat(action.item);
    const newTotalAmount =
      state.totalAmount + action.item.price * action.item.amount;
    return {
      items: updatedItems,
      totalAmount: newTotalAmount,
    };
  }
  return defaultCartState;
}

function CartProvider(props) {
  const [cartState, dispatchCartAction] = useReducer(
    cartReducer,
    defaultCartState
  );

  function addItemToCartHanlder(item) {
    dispatchCartAction({ type: "ADD", item: item });
  }

  function removeItemFromCartHanlder(id) {
    dispatchCartAction({ type: "REMOVE", id: id });
  }

  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
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
