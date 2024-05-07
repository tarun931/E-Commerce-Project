import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CartTotal from "../CartTotal";

function Cart() {
  const cart = useSelector((state) => state.cart.items);
  console.log(cart);
  const cartList = cart ? Object.values(cart) : [];

  if (cartList.length === 0) {
    return <div>No items in the cart!</div>;
  } else {
    return (
      <>
        <Link to="/">back</Link>
        <ol>
          {cartList.map((cartItem) => (
            <li key={cartItem.id}>
              <div>{cartItem.title}</div>
              <div>Quantity: {cartItem.quantity}</div>
            </li>
          ))}
        </ol>
        <CartTotal />
      </>
    );
  }
}
export default Cart;
