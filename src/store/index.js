import { applyMiddleware, combineReducers, createStore } from "redux";
import cartReducer from "./cart";
import categoriesReducer from "./categories";
import thunk from "redux-thunk";

// return {
//   cart: reducers.cart(state.cart, action),
//   categories: reducers.categories(state.categories, action)
// }

const reducer = combineReducers({
  cart: cartReducer,
  categories: categoriesReducer
});

let store = createStore(reducer, applyMiddleware(thunk));

export default store;
