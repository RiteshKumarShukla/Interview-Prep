import { LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS } from "./actionTypes"
import axios from 'axios';
//Write the ActionCreator functions here
export const loginRequest = ()=>{
    return {
        type:LOGIN_REQUEST
    }
}
export const loginSuccess = (payload)=>{
    return {
        type:LOGIN_SUCCESS,
        payload
    }
}
export const loginFailure = ()=>{
    return{
        type:LOGIN_FAILURE
    }
}

export const login =(payload)=>dispatch =>{
    dispatch(loginRequest());
    return axios.post('https://reqres.in/api/login',payload)
    .then(r=>dispatch(loginSuccess(r.data.token)))
    .catch(e=>dispatch(loginFailure()))
}