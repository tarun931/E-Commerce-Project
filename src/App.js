import "./styles.scss";
import ProductsPage from "./pages/ProductsPage";
import CartPage from "./pages/CartPage";
import NotFoundPage from "./pages/NotFoundPage";

import CartContext from "./contexts/CartContext";
import { Switch, Route } from "react-router-dom";

import { useState } from "react";

// {productId: {productdetails, quantity},
// productId: {productdetails, quantity}}
//}
export default function App() {
  const [cart, setCart] = useState({});
  console.log("App");
  function increaseQuantity(product) {
    const newCart = { ...cart };
    if (!newCart[product.id]) {
      newCart[product.id] = {
        id: product.id,
        title: product.title,
        price: product.price.value,
        quantity: 0
      };
    }
    newCart[product.id].quantity += 1;
    setCart(newCart);
  }

  function decreaseQuantity(product) {
    const newCart = { ...cart };
    if (!newCart[product.id]) return;
    newCart[product.id].quantity -= 1;
    if (newCart[product.id].quantity <= 0) {
      delete newCart[product.id];
    }
    setCart(newCart);
  }
  // {cart: cart, increaseQuantity: increaseQuantity}
  return (
    <CartContext.Provider value={{ cart, increaseQuantity, decreaseQuantity }}>
      <Switch>
        <Route exact={true} path="/" component={ProductsPage} />
        <Route exact={true} path="/cart" component={CartPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </CartContext.Provider>
  );
}

