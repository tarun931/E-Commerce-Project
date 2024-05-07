import React from "react";
import { useContext } from "react";

import CartContext from "../../contexts/CartContext";

function AddToCart({ product }) {
  const { cart, increaseQuantity, decreaseQuantity } = useContext(CartContext);
  console.log("addtocart", product.id);
  console.log("add to cart", product.id);
  const quantity = cart[product.id] ? cart[product.id].quantity : 0;
  function increment() {
    increaseQuantity(product);
  }

  function decrement() {
    decreaseQuantity(product);
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
export default AddToCart;
