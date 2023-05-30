  import Reducer from "./CounterReducer";
  import {incrementAction , decrementAction,resetAction,incrementByValue,decrementByValue} from "./CounterAction";
import { useReducer, useState } from "react";


  function Counter (){
    const [state, dispatch] = useReducer(Reducer,0);
    const [inputValue, setInputValue] = useState("");
    return (
      <>
      <h1>State: {state}</h1>
      <input
        type="number"
        value={inputValue}
        onChange={(e) => setInputValue(Number(e.target.value))}
      />

      <button onClick={()=>dispatch(incrementAction)}>Increment</button>
      <button onClick={()=>dispatch(decrementAction)}>decrement</button>
      <button onClick={()=>dispatch(resetAction)}>reset</button>
      <button onClick={() => dispatch(incrementByValue(inputValue))}>
        INCREMENT BY VALUE
      </button>

      <button onClick={() => dispatch(decrementByValue(inputValue))}>
        DECREMENT BY VALUE
      </button>
      </>
    )
  }
  export default Counter