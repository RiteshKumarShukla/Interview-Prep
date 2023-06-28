import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { BUY_CAKE, CAKE_RESTOCKED, buy, restock } from "./reduxPart";



function CakeUI() {
  const noOfCakes = useSelector((state) => state.noOfCakes);
  const dispatch = useDispatch();

  return (
    <div>
      <h1>Cake Count:- {noOfCakes} </h1>
      <button onClick={() => dispatch(buy(BUY_CAKE, 1))}>Buy Cake</button>
      <button onClick={() => dispatch(restock(CAKE_RESTOCKED, 5))}>
        Restore Cake
      </button>
    </div>
  );
}

export default CakeUI;
