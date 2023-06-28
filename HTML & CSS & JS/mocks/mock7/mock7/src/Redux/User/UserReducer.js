import { GET_USERDATA_ERROR, GET_USERDATA_REQUEST, GET_USERDATA_SUCCESS, USER_SEARCH_ERROR, USER_SEARCH_REQUEST, USER_SEARCH_SUCCESS } from "./UserActionTypes"

const initialState = {
    data:[],
    isLoading:false,
    isError:false
}

const UserReducer = (state = initialState, {type,payload})=>{
    switch(type){
        case(GET_USERDATA_REQUEST):{
            return {
                ...state,
                isLoading:true
            }
        }
        case(GET_USERDATA_SUCCESS):{
            return {
                ...state,
                data:payload,
                isLoading:false
                
            }
        }
        case(GET_USERDATA_ERROR):{
            return {
                ...state,
                isError:true
            }
        }
        case(USER_SEARCH_REQUEST):{
            return {
                ...state,
                isLoading:true
            }
        }
        case(USER_SEARCH_SUCCESS):{
            return {
                ...state,
                data:payload,
                isLoading:false
                
            }
        }
        case(USER_SEARCH_ERROR):{
            return {
                ...state,
                isError:true
            }
        }
        default :return state
    }
}

export default UserReducer