import axios from "axios";
import { ADD_TASK_FAILURE, ADD_TASK_REQUEST, ADD_TASK_SUCCESS, DELETE_TASK_FAILURE, DELETE_TASK_REQUEST, DELETE_TASK_SUCCESS, GET_TASKS_FAILURE, GET_TASKS_REQUEST, GET_TASKS_SUCCESS, UPDATE_TASK_FAILURE, UPDATE_TASK_REQUEST, UPDATE_TASK_SUCCESS } from "./actionTypes"

//get tasks
export const getTasks = (params) => (dispatch) =>{
    dispatch({type:GET_TASKS_REQUEST});
    return axios.get(`http://localhost:${process.env.REACT_APP_JSON_SERVER_PORT}/tasks`,params)
    .then(r=>dispatch({type:GET_TASKS_SUCCESS,payload:r.data}))
    .catch(e=>dispatch({type:GET_TASKS_FAILURE}))
}

//add task

export const addTasks = (params) =>(dispatch)=>{
    dispatch({type:ADD_TASK_REQUEST});
    return axios.post(`http://localhost:${process.env.REACT_APP_JSON_SERVER_PORT}/tasks`,params)
    .then(r=>dispatch({type:ADD_TASK_SUCCESS,payload:r.data}))
    .catch(e=>dispatch({type:ADD_TASK_FAILURE}))
}

//update task
export const updateTask = (id,params)=>(dispatch)=>{
    dispatch({type:UPDATE_TASK_REQUEST});
    return axios.patch(`http://localhost:${process.env.REACT_APP_JSON_SERVER_PORT}/tasks/${id}`,params)
    .then(r=>dispatch({type:UPDATE_TASK_SUCCESS,payload:r.data}))
    .catch(e=>dispatch({type:UPDATE_TASK_FAILURE}))
}
//delete task
export const deleteTask = (id) => (dispatch)=>{
    dispatch({type:DELETE_TASK_REQUEST});
    return axios.delete(`http://localhost:${process.env.REACT_APP_JSON_SERVER_PORT}/tasks/${id}`)
    .then(r=>dispatch({type:DELETE_TASK_SUCCESS}))
    .catch(e=>dispatch({type:DELETE_TASK_FAILURE}))
}