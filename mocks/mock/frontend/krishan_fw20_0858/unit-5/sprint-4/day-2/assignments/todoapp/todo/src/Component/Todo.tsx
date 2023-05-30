import React, { useState } from 'react';
import TodoInput from './TodoInput'
import TodoList from './TodoList';
interface TodoInterface {
    id:number;
    content:string;
    isCompleted:boolean;
}
const Todo = () => {
    const [todo, setTodo] = useState<Array<{id:number;content:string;isCompleted:boolean}>>([]);

    const addTodo = (content:string)=>{
        setTodo([...todo,
            {
            id:Date.now(),
            content,
            isCompleted:false
        }])
    }
    const deleteTodo = (id:number)=>{
        const updateTodos = todo.filter((t)=>t.id!==id);
        setTodo(updateTodos)
    }

    const toggleTodo = (id:number)=>{
        const updateTodos = todo.map((t)=>{
           if( t.id ===id){
            t.isCompleted = !t.isCompleted;
           }
           return t
        })
        setTodo(updateTodos)
    }
  return (
    <div>
        <h1>Todo App </h1>
        <TodoInput addFun = {addTodo}/>
        {todo.map((t)=>(
            <TodoList key={t.id} {...t}
            deleteTodo={deleteTodo}
            toggleTodo = {toggleTodo}/>
        ))}
    </div>
  )
}

export default Todo