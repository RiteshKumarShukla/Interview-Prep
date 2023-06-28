import * as redux from "redux";


/*.................... ACTION TYPES ....................*/
// action types
export const BUY_CAKE = "BUY_CAKE";
export const CAKE_RESTOCKED = "CAKE_RESTOCKED";



/*.................... ACTIONS ....................*/
//actions
export function buy(type, quantity = 1) {
  return {
    type,
    quantity
  };
}

export function restock(type, quantity = 1) {
  return {
    type,
    quantity
  };
}



/*.................... REDUCER ....................*/
const initialState = {
  noOfCakes: 20
};

//reducer
export const cakeReducer = (state = initialState, action) => {
  switch (action.type) {
    case BUY_CAKE:
      return {
        ...state,
        noOfCakes: state.noOfCakes - action.quantity
      };
    case CAKE_RESTOCKED:
      return {
        ...state,
        noOfCakes: state.noOfCakes + action.quantity
      };
    default:
      return state;
  }
};







/*.................... STORE ....................*/
//store
export const store = redux.createStore(cakeReducer);
