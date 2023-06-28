import React from 'react'
import { ADD_TODOS_FAILURE, ADD_TODOS_REQUEST, ADD_TODOS_SUCCESS, GET_TODOS_FAILURE, GET_TODOS_REQUEST, GET_TODOS_SUCCESS } from './Auth.actionTypes'
const initialState = {
    isLoading:false,
    isError:false,
    todos:[]
}

const AuthReducer = (state= initialState,{type,payload}) => {
  switch(type){
    case(GET_TODOS_REQUEST):{
        return{
            ...state,
            isLoading:true
        }
    }
    case (GET_TODOS_SUCCESS):{
        return {
            ...state,
            isLoading:false,
            todos:[...payload]
        }
    }
    case (GET_TODOS_FAILURE):{
        return{
            ...state,
            isError:true
        }
    }
    case(ADD_TODOS_REQUEST):{
        return{
            ...state,
            isLoading:true
        }
    }
    case (ADD_TODOS_SUCCESS):{
        return {
            ...state,
            isLoading:false,
            todos:[...state.todos,payload]
        }
    }
    case (ADD_TODOS_FAILURE):{
        return{
            ...state,
            isError:true
        }
    }
    default :return state
  }
}

export default AuthReducer