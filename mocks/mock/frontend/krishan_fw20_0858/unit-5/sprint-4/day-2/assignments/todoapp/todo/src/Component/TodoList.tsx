import React from 'react'

const TodoList = (props:{id:number,content:string,isCompleted:boolean,deleteTodo:Function,toggleTodo:Function}) => {
    const {id,content,isCompleted,deleteTodo,toggleTodo} = props;

  return (
    <div >
        <div onClick={()=>toggleTodo(id)} >
        <span>{content}</span>---
        <span >{isCompleted ? 'Completed' : 'Not Completed'}</span>
        </div>
        <button onClick={()=>deleteTodo(id)}>Delete</button>
    </div>
  )
}

export default TodoList