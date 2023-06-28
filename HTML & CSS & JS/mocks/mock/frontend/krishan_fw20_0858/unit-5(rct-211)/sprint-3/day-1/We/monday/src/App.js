import './App.css';
import axios from 'axios';
import Pin from './components/Pin';
import { useCallback, useEffect, useState } from 'react';
import DebitCard from './components/DebitCard';
import SearchBar from './SearchBar/SearchBar';

function App() {
const [pinValue, setPinValue] = useState("")
const [query, setQuery ]= useState("");
const [suggestions, setSuggestions] = useState([]);
const [apiData, setApiData] = useState([])
const queryHandler =useCallback((value)=>{
  setQuery(value)
},[]);

useEffect(()=>{
  if(query.length === 0){
    setSuggestions([])
  }
  else{
    axios.get('http://localhost:8080/country')
    .then(r=>setApiData(r.data))
    .catch(e=>console.log(e));

    let textQuery = query.trim().toLowerCase();
    let newSuggestions = apiData.filter((item)=>{
      return item.country.toLowerCase().indexOf(textQuery) !== -1 ? true :false;
    }).map(item=>item.country);
    setSuggestions(newSuggestions)

  }
},[query])

  return (
    <div className="App">
    {/* <Pin length={4} perInputBox={4} setPin={setPinValue} />
    OTP is {pinValue} */}

    {/* <DebitCard length = {4} perInputBox={4} setPin={setPinValue}/> */}
    <h2>Search Bar</h2>
    <h3>Search Query:{query}</h3>
    <SearchBar queryHandler = {queryHandler}
    suggestions = {suggestions}/>
    </div>
  );
}

export default App;
