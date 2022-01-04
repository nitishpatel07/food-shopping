import { addItemToCart, removeItemFromCart } from "./utils";

const initialState = {
  cartItems: [],
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TO_CART": {
      return {
        ...state,
        cartItems: addItemToCart(state.cartItems, action.payload),
      };
    }
    case "REMOVE_FROM_CART": {
      return {
        ...state,
        cartItems: removeItemFromCart(state.cartItems, action.payload),
      };
    }
    default:
      return state;
  }
};

export default cartReducer;
