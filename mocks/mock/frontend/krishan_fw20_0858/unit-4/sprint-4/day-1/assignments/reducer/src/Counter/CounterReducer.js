function Reducer(state,action){
  // if(action.type==="incrementCount"){
  //   return state+1
  // }
  // if(action.type === "decrementCount"){
  //   return state-1
  // }
  // if(action.type === "resetCount"){
  //   return 0
  // }
  // return state

  switch (action.type) {
    case "incrementCount":
    return state+1 ;
    case 'decrementCount':
      return state-1
      case "resetCount":
        return 0;
      
      case "INCREMENT_COUNT_BY_VALUE":
          return state + action.payload;
          
        case "DECREMENT_COUNT_BY_VALUE":
          return state - action.payload;
          
          default : return state;
  }
}

export default Reducer;