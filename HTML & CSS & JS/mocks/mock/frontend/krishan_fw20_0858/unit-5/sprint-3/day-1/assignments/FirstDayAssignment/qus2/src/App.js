import logo from './logo.svg';
import './App.css';
import {useSelector, useDispatch} from 'react-redux';
import {Increment,Decrement} from './redux/action'
function App() {
  const dispatch = useDispatch();
 
  const count = useSelector((initialState)=>initialState.count)
  useSelector((state)=>console.log(state))
  return (
    <div className="App">
      <h1>{count}</h1>   
      <br/>   
      <button onClick= {()=>dispatch(Increment())}>ADD</button>
      <button onClick= {()=>dispatch(Decrement())}>REDUCE</button>
      <br/>  
    

    </div>
  );
}

export default App;
