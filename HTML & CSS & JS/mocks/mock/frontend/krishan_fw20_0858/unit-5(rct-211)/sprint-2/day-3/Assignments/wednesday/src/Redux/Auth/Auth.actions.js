import { ADD_TODOS_FAILURE, ADD_TODOS_REQUEST, ADD_TODOS_SUCCESS, GET_TODOS_FAILURE, GET_TODOS_REQUEST, GET_TODOS_SUCCESS } from "./Auth.actionTypes"
import axios from 'axios'; 

export const todoRequest = ()=>{
    return {
        type:GET_TODOS_REQUEST
    }
};

export const todoSuccess = (payload) =>{
    return {
        type:GET_TODOS_SUCCESS,
        payload
    }
};

export const todoError = () =>{
    return {
        type:GET_TODOS_FAILURE
    }
};

export const AddTodoRequest = ()=>{
    return {
        type:ADD_TODOS_REQUEST
    }
}

export const AddTodoSuccess = (payload)=>{
    return {
        type:ADD_TODOS_SUCCESS,
        payload
    }
}

export const AddTodoError = ()=>{
    return {
        type:ADD_TODOS_FAILURE
    }
}

export const getTodos = (dispatch)=>{
    dispatch(todoRequest());
    return axios.get('http://localhost:8080/todos')
    .then(r=>dispatch(todoSuccess(r.data)))
    .catch(e=>dispatch(todoError()))
}

export const AddTodo = (todo)=>(dispatch) =>{
    if(todo){
        const payload = {
            title:todo,
            status:false
        }
        dispatch(AddTodoRequest());
    return axios.post('http://localhost:8080/todos',payload)
    .then(r=>dispatch(AddTodoSuccess(r.data)))
    .catch(e=>dispatch(AddTodoError()))
    }
    
}