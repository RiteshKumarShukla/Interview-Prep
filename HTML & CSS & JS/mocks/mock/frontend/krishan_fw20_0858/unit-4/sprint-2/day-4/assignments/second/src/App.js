import "./styles.css";
import {useRef} from "react"


export default function App() {
 const inputRef = useRef(null)

 const handleChange = () =>{
  inputRef.current.focus();
 }
  return (
    <div className="App">
     <input placeholder="anything you want" ref={inputRef}/>
    <button onClick={handleChange}> Yeah</button>
         </div>
  );
}
