import { AUTH_LOGIN_ERROR, AUTH_LOGIN_REQUEST, AUTH_LOGIN_SUCCESS, AUTH_LOGOUT } from './Auth.actionTypes';
const token =localStorage.getItem("token")
const initialState= {
    isLoading:false,
    isError:false,
    isAuth:false,
    token:token || ""
}
const AuthReducer = (state = initialState, {type,payload}) => {
    switch(type){
        case (AUTH_LOGIN_REQUEST):{
            return {
                ...state,
                isLoading:true
            }
        }
        case (AUTH_LOGIN_SUCCESS):{
            const tokenPayload = localStorage.setItem("token",payload)
            return {
                ...state,
                isLoading:false,
                isAuth:true,
                token:localStorage.getItem('token')
            }
        }

        case(AUTH_LOGIN_ERROR):{
            return {
                ...state,
                isAuth:false,
                isLoading:false,
                isError:true
            }
        }
        case(AUTH_LOGOUT):{
            return {
                ...state,
                isAuth:false,
                token:localStorage.removeItem("token")
            }
        }
        default: return state
    }
}

export default AuthReducer