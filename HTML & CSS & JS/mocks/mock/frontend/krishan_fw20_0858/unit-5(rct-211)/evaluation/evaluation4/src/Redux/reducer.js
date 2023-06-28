import { ADD_TASK_FAILURE, ADD_TASK_REQUEST, ADD_TASK_SUCCESS, DELETE_TASK_FAILURE, DELETE_TASK_REQUEST, DELETE_TASK_SUCCESS, GET_TASKS_FAILURE, GET_TASKS_REQUEST, GET_TASKS_SUCCESS, UPDATE_TASK_FAILURE, UPDATE_TASK_REQUEST, UPDATE_TASK_SUCCESS } from "./actionTypes";

// NOTE: DO NOT MODIFY the intial state structure in this file.
const initialState = {
  tasks: [],
  isLoading: false,
  isError: false,
};

const reducer = (state = initialState,{type,payload}) => {
  //write the logic to handle, get task, update task, add task, and delete task
  switch(type){
    case(GET_TASKS_REQUEST):{
      return {
        ...state,
        isLoading:true
      }
    }
    case(GET_TASKS_SUCCESS):{
      return{
        ...state,
        isLoading:false,
        isError: false,
        tasks:payload
      }
    }
    case(GET_TASKS_FAILURE):{
      return {
        ...state,
        isError:true
      }
    }
    case(ADD_TASK_REQUEST):{
      return {
        ...state,
        isLoading:true,
        isError: false,
      }
    }
    case(ADD_TASK_SUCCESS):{
      return{
        ...state,
        isLoading:false,
        isError: false,
        tasks:[...state.tasks,payload]
      }
    }
    case (ADD_TASK_FAILURE):{
      return {
        ...state,
        isError:true
      }
    }
    case(UPDATE_TASK_REQUEST):{
      return{
        ...state,
        isLoading:true,
        isError: false,
      }
    }
    case(UPDATE_TASK_SUCCESS):{
    return {
      ...state,
      isLoading:false,
      isError: false,
      tasks:[...state.tasks,payload]
    }
    }
    case(UPDATE_TASK_FAILURE):{
      return {
        ...state,
        isError:true
      }
    }
    case(DELETE_TASK_REQUEST):{
      return {
        ...state,
        isError: false,
        isLoading:true
      }
    }
    case(DELETE_TASK_SUCCESS):{
      return{
        ...state,
        isLoading:false,
        isError: false,
        tasks:[...state.tasks]
      }
    }
    case(DELETE_TASK_FAILURE):{
      return {
        ...state,
        isError:true
      }
    }
    default :return state
  }
};

export { reducer };
