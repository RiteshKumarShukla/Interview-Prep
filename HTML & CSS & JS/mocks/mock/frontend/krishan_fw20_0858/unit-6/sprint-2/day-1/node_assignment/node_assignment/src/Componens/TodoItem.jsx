import axios from 'axios'
import React from 'react'

const TodoItem = ({todoData}) => {
    // console.log(todoData.title);
    const handleDelete = () =>{
        axios.delete("http://localhost:4500/122")
    }
  return (
    <div style={{border:'1px solid black',display:'flex',flexDirection:"column",justifyContent:"center",alignItems:"center"}}>
        <h3>{todoData.title}</h3>
        <p>{todoData.author}</p>
        <button onClick={handleDelete}>Delete</button>
        <button>Edit</button>
    </div>
  )
}

export default TodoItem