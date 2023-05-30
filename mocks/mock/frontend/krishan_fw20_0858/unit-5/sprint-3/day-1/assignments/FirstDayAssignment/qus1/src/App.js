import logo from './logo.svg';
import {useState} from 'react'
import './App.css';
import {useSelector, useDispatch} from 'react-redux';
import {Increment,Decrement,IncrementByValue,DecrementByValue,MultiplyByValue,DivideByValue} from './redux/action'
function App() {
  const dispatch = useDispatch();
  const [value, setValue] = useState(0)
  const count = useSelector((initialState)=>initialState.count)
  useSelector((state)=>console.log(state))
  return (
    <div className="App">
      <h1>{count}</h1>   
      <br/>   
      <input type= 'number' onChange={({target})=>setValue(Number(target.value))} />
      <button onClick= {()=>dispatch(Increment())}>Inc</button>
      <button onClick= {()=>dispatch(Decrement())}>Dec</button>
      <br/>  
      <button onClick= {()=>dispatch(IncrementByValue(value))}>Add</button>
      <button onClick= {()=>dispatch(DecrementByValue(value))}>Substract</button>
      <button onClick= {()=>dispatch(MultiplyByValue(value))}>Multiply</button>
      <button onClick= {()=>dispatch(DivideByValue(value))}>Divide</button>


    </div>
  );
}

export default App;
