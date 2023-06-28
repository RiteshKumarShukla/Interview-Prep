export const incrementAction = {type:"incrementCount"}
export const decrementAction = {type:"decrementCount"};
export const resetAction = {type:"resetCount"}

export const incrementByValue = (value) => {
  return {
    type: "INCREMENT_COUNT_BY_VALUE",
    payload: value
  };
};

export const decrementByValue = (value) => ({
  type: "DECREMENT_COUNT_BY_VALUE",
  payload: value
});
