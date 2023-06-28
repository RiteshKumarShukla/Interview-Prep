import { DELETE_CART, POST_PRODUCT } from "./CartActionTypes";

const initialState = {
  cart: [],
};

const cartReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case POST_PRODUCT: {
      return {
        ...state,
        cart: [...state.cart, payload],
      };
    }
    case DELETE_CART: {
      return {
        ...state,
        cart: [],
      };
    }
    default:
      return state;
  }
};

export default cartReducer;
