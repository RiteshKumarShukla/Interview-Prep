import axios from "axios";
import { USER_LOGIN_ERROR, USER_LOGIN_REQUEST, USER_LOGIN_SUCCESS } from "./Auth.actionTypes"


export const login = (payload)=>dispatch =>{
    dispatch({type:USER_LOGIN_REQUEST});

    return axios.post('https://reqres.in/api/login',payload)
    .then(r=>dispatch({type:USER_LOGIN_SUCCESS,payload:r.data.token}))
    .catch(e=>dispatch({type:USER_LOGIN_ERROR}))
}