// Note: Do not update/change the initial state

import { ADD_ITEM_TO_CART_ERROR,ADD_ITEM_TO_CART_LOADING,ADD_ITEM_TO_CART_SUCCESS } from "./cart.types";
const cartInitalState = {
  getCartItems: {
    loading: false,
    error: false,
  },
  addCartItem: {
    loading: false,
    error: false,
  },
  updateCartItem: {
    loading: false,
    error: false,
  },
  removeCartItem: {
    loading: false,
    error: false,
  },
  data: [],
};
export const cartReducer = (state = cartInitalState,{type, payload}) => {
  switch(type){
    case (ADD_ITEM_TO_CART_LOADING):{
      return {
        ...state,
        addCartItem: {
          loading: true,
          error: false,
        },
        
      }
    }

    case (ADD_ITEM_TO_CART_SUCCESS):{
      return{
        ...state,
        addCartItem: {
          loading: false,
          error: false,
        },
        data:payload
      }
    }

    case (ADD_ITEM_TO_CART_ERROR):{
      return{
        ...state,
        addCartItem: {
          loading: false,
          error: true,
        },
        data : []
      }
    };
    default: return state;
  }
};
