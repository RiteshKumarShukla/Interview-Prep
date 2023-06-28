import { USER_LOGIN_ERROR, USER_LOGIN_REQUEST, USER_LOGIN_SUCCESS } from "./Auth.actionTypes"

const initialState = {
    isAuth:false,
    token:"",
    isAuthLoading:false,
    isAuthError:false
}

const AuthReducer = (state= initialState,{type,payload})=>{
 switch(type){
    case(USER_LOGIN_REQUEST):{
        return{
            ...state,
            isAuthLoading:true,
        }
    };
    case(USER_LOGIN_SUCCESS):{
        return {
            ...state,
            isAuthLoading:false,
            token:payload,
            isAuth:true,
        }
    };
    case(USER_LOGIN_ERROR):{
        return {
            ...state,
            isAuth:false,
            isAuthLoading:false,
            isAuthError:true
        }
    }
    default : return state
 }
}

export default AuthReducer;