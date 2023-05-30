import { AUTH_LOGIN_ERROR, AUTH_LOGIN_REQUEST, AUTH_LOGIN_SUCCESS, AUTH_LOGOUT } from "./Auth.actionTypes"

export const loginRequest = () =>{
    return {
        type:AUTH_LOGIN_REQUEST
    }
}

export const loginSuccess = (payload)=>{
    return {
        type:AUTH_LOGIN_SUCCESS,
        payload
    }
}

export const loginError = ()=>{
    return {
        type:AUTH_LOGIN_ERROR
    }
}

export const logOut = ()=>{
    return {
        type:AUTH_LOGOUT,
    }
}