import axios from "axios"
import { GET_SHOES_DATA_FAILURE, GET_SHOES_DATA_REQUEST, GET_SHOES_DATA_SUCCESS } from "./actionType"

//Write the ActionCreator functions here
export const getShoesRequest = ()=>{
    return {
        type:GET_SHOES_DATA_REQUEST
    }
}

export const getShoesSuccess = (payload)=>{
    return {
        type:GET_SHOES_DATA_SUCCESS,
        payload
    }
}

export const getShoesError= ()=>{
    return {
        type:GET_SHOES_DATA_FAILURE
    }
}

export const getShoes =(params)=> (dispatch)=>{
 dispatch(getShoesRequest());
 return axios.get(`http://localhost:${process.env.REACT_APP_JSON_SERVER_PORT}/shoes`,params)
 .then(r=>dispatch(getShoesSuccess(r.data)))
 .catch(e=>dispatch(getShoesError()))
}