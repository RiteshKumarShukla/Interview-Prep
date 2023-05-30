import logo from './logo.svg';
import './App.css';
import useTimout from './CustomHooks/useTimout';
import { useEffect, useState } from 'react';
import useFetch from './CustomHooks/useFetch';

function App() {

const {loading, error, data} = useFetch('http://locwalhost:8080/posts');
console.log(loading,error, data)
if(loading){
  return <h1>loading...</h1>
}
else if(error){
 return <h1>Error...</h1>
}
  return (
    <div className="App">
      {data && data.map((t)=>{
        return <div key={t.id}>{t.title}</div>
      })}
    </div>
  );
}

export default App;
