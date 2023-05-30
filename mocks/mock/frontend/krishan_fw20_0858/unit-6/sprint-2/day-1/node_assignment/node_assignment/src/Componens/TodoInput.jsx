import axios from 'axios';
import React from 'react'
import { useState } from 'react';

const TodoInput = (props) => {
    const setData = props.storage.setData;
    const [input, setInput ]= useState("");
    const [author,setAuthor]= useState("");
    // console.log(props.storage.setData)
    const handleChange = (e)=>{
    setInput(e.target.value);
}
const authorChange = (e)=>{
    setAuthor(e.target.value);    
    }
    const handleClick = (e)=>{
        e.preventDefault();
        axios.post("http://localhost:4500/",{title:input,author:author})
        .then(r=>setData(r))
        .catch(e=>console.log(e))
    }
  return (
    <div>
        <input type="text" onChange={handleChange} value={input}/>
        <input type="text" onChange = {authorChange} value={author}/>
        <button onClick={handleClick}>Add</button>
    </div>
  )
}

export default TodoInput