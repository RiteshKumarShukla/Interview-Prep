// Note: Do not update/change the initial state
import { AUTH_SIGN_IN_ERROR,AUTH_SIGN_IN_LOADING,AUTH_SIGN_IN_SUCCESS,
AUTH_SIGN_OUT,RESET_AUTH } from "./auth.types";
export const authInitalState = {
  loading: false,
  data: {
    token: "",
    isAuthenticated: false,
  },
  error: false,
};

export const authReducer = (state = authInitalState,{type,payload}) => {
  switch(type){
    case (AUTH_SIGN_IN_LOADING):{
      return {
        ...state,
        loading:true,
        error:false
      }
    };
    case (AUTH_SIGN_IN_SUCCESS):{
      localStorage.setItem("token",payload)
      return {
        ...state,
        data:{
          token:payload,
          isAuthenticated:true
        },
        loading:false,
        error:false,

      }
    }
    case (AUTH_SIGN_IN_ERROR):{
      return{
        ...state,
        error:true,
        loading:false
      }
    }
    case (AUTH_SIGN_OUT):{
      localStorage.removeItem("token")
      return{
        ...state,
        loading:false,
        data:{
          token:"",
          isAuthenticated:false,
        },
        error:false,
      }
    }
    default: return state
  };
  
};
