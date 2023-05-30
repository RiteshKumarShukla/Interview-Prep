import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import axios from 'axios';
import { deletedTodos, getTodoError, getTodoRequest, getTodoSuccess, updatedTodos } from '../Redux/TodoRedux/Todo.actions';
import { useParams,useNavigate,  } from 'react-router-dom';
import { logOut } from '../Redux/AuthRedux/Auth.actions';

const Todos = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch();
  const todos = useSelector(store=>store.todo.todos);
  const loading = useSelector(store => store.todo.isLoading);

const getTodos = ()=>{
 dispatch(getTodoRequest());
 
 axios.get('http://localhost:8080/todos')
 .then(r=>dispatch(getTodoSuccess(r.data)))
 .catch(e=>dispatch(getTodoError()))
}



  useEffect(()=>{
    getTodos()
  },[])

  if(loading){
    return <h1>Loading...</h1>
  }

  return (
    <>
    <div>Todos</div>
    <nav>
      <button onClick={()=>dispatch(logOut())}>Logout</button>
    </nav>
    
    {todos.length>0 && todos.map((e)=>(
      <div key = {e.id}><span onClick={()=>navigate(`/todos/${e.id}`)}>{e.title}</span> -<span onClick={()=>dispatch(updatedTodos({...e,status:!e.status}))}>{e.status ? 'Completed' : 'Not Completed'}</span>
      <button onClick={()=>dispatch(deletedTodos({...e}))}>Delete</button>
     <button onClick={()=>{navigate(`/todos/${e.id}/edit`)}}>Edit</button>
      </div>
    ))}
    </>
  )
}

export default Todos