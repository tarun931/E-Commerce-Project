import { useMemo } from "react";
import { useSelector } from "react-redux";

function CartTotal() {
  const cart = useSelector((state) => state.cart.items);
  const cartList = cart ? Object.values(cart) : [];
  function getCartTotal() {
    console.log("memoised function called");
    let totalPrice = 0;
    cartList.forEach((cartItem) => {
      totalPrice += cartItem.quantity * cartItem.price;
    });
    return totalPrice;
  }

  // cartList.reduce((item, total) => {
  //   return item.quantity * item.amount
  //   }, 0)
  console.log(cartList);
  // const total =getCartTotal();
  // useMemo(callback, [])
  const total = useMemo(getCartTotal, [cart]);
  return <div>Cart Total: {total}</div>;
}

export default CartTotal;
