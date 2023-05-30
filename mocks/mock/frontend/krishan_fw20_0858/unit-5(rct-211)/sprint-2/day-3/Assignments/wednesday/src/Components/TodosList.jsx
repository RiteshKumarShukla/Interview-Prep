import React from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getTodos } from '../Redux/Auth/Auth.actions';


const TodosList = () => {
const todos = useSelector((store)=>store.todos);
const dispatch = useDispatch();

    useEffect(()=>{
    dispatch(getTodos)     
    },[])

    console.log(todos)
  return (
    <div>
        {todos.length>0 && todos.map((t)=>{
            return <div key={t.id}>{t.title}-{t.status ? 'True': 'False'}</div>
        })}
    </div>
  )
}

export default TodosList