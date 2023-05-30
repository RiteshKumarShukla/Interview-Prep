import { GET_BOOKS_ERROR, GET_BOOKS_REQUEST, GET_BOOKS_SUCCESS } from "./App.ActionTypes";

const initialState = {
    isDataLoading:false,
    isDataError:false,
    books:[]
}
const AppReducers = (state=initialState,{type,payload}) => {
    switch(type){
        case(GET_BOOKS_REQUEST):{
            return{
                ...state,
                isDataLoading:true
            }
        };
        case(GET_BOOKS_SUCCESS):{
            return{
                ...state,
                isDataError:false,
                isDataLoading:false,
                books:[...payload]
            }
        };
        case(GET_BOOKS_ERROR):{
            return{
                ...state,
                isDataError:true
            }
        };
        default:return state;
    }
    
}

export default AppReducers