import React from 'react'
import axios from 'axios';
import { useEffect } from 'react'
import { useState } from 'react';
import TodoItem from './TodoItem';
import TodoInput from './TodoInput';

const Todo = () => {
    const [data, setData]= useState([]);
    console.log('rendering happening')
    useEffect(()=>{
    axios.get("http://localhost:4500/")
    .then(r=>setData(r.data))
    .catch(e=>console.log(e))
    },[]);

    const [input, setInput ]= useState("");
    const [author,setAuthor]= useState("");
    const handleChange = (e)=>{
    setInput(e.target.value);
}
const authorChange = (e)=>{
    setAuthor(e.target.value);    
    }
    const handleClick = (e)=>{
        e.preventDefault();
        axios.post("http://localhost:4500/",{id:Date.now(),title:input,author:author})
        .then(r=>setData(r.data.posts))
        .catch(e=>console.log(e))
    }
    const handleDelete = (e)=>{
        console.log(e);
        axios.delete("http://localhost:4500/122")
    }
  return (
    <>
  <div>
        <input type="text" onChange={handleChange} value={input}/>
        <input type="text" onChange = {authorChange} value={author}/>
        <button onClick={handleClick}>Add</button>
    </div>
    <div>
        {data && data.map((e,i)=>{
            return <div key={i} >
            <h3>{e.title}</h3>
            <p>{e.author}</p>
            <button onClick={()=>{
                axios.delete(`http://localhost:4500/${e.id}`)
                .then(r=> {setData(r.data.posts)
                console.log(e.id)})
                .catch(e=>console.log(e));
            }}>Delete</button>
            <button>Edit</button>
        </div>
        })}
    </div>
    </>
  )
}

export default Todo