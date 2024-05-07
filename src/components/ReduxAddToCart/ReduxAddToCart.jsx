import React from "react";
import { useSelector, useDispatch } from "react-redux";

function ReduxAddToCart({ product }) {
  const dispatch = useDispatch();
  const quantity = useSelector((state) => {
    return state.cart.items[product.id]?.quantity || 0;
  });
  console.log("add to cart", product.id);

  function increment() {
    console.log(product);
    dispatch({ type: "ADD_TO_CART", payload: product });
  }

  function decrement() {
    dispatch({ type: "REMOVE_FROM_CART", payload: product });
  }

  if (quantity === 0) {
    return (
      <div>
        <button onClick={increment}>Add to Cart</button>
      </div>
    );
  } else {
    return (
      <>
        <button onClick={decrement}>-</button>
        <span> {quantity}</span>
        <button onClick={increment}>+</button>
      </>
    );
  }
}
export default ReduxAddToCart;
