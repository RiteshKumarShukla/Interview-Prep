import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { AddTodo, getTodos } from '../Redux/Auth/Auth.actions'

const TodoInput = () => {
    const [value , setValue] = useState("")
    const dispatch = useDispatch()
    const handleChange = (e)=>{
        setValue(e.target.value)
    }
    const handleAdd = ()=>{
     dispatch(AddTodo(value))
     .then(r=>dispatch(getTodos))
    }
  return (
    <div>
        <input type="text" value= {value} onChange={handleChange} />
        <button onClick={handleAdd}>Add Todo</button>
    </div>
  )
}

export default TodoInput