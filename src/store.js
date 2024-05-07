// reducer is a function
// state, action
// action is an object which has two things
// type, payload/value
// dispatch

//dispatch({type: "ADD_TO_CART", payload: products})
import { omit } from "lodash";
import { createStore } from "redux";

//{productID:{quantity: 1}, productID2: {}}
function cartReducer(state = { items: {} }, action) {
  switch (action.type) {
    case "ADD_TO_CART": {
      const product = action.payload;
      console.log(action.payload);
      if (state.items[product.id]) {
        return {
          ...state,
          items: {
            ...state.items,
            [product.id]: {
              ...state.items[product.id],
              quantity: state.items[product.id].quantity + 1
            }
          }
        };
      } else {
        return {
          ...state,
          items: {
            ...state.items,
            [product.id]: {
              ...product,
              quantity: 1
            }
          }
        };
      }
    }

    // do some change on the state and
    // return a new state
    case "REMOVE_FROM_CART": {
      const product = action.payload;

      if (state.items[product.id].quantity <= 1) {
        return {
          ...state,
          items: omit(state.items, [product.id])
        };
      } else {
        return {
          ...state,
          items: {
            ...state.items,
            [product.id]: {
              ...state.items[product.id],
              quantity: state.items[product.id].quantity - 1
            }
          }
        };
      }
    }
    default:
      return state;
  }
}

const store = createStore(cartReducer);
console.log(store.getState());
export default store;

// state
