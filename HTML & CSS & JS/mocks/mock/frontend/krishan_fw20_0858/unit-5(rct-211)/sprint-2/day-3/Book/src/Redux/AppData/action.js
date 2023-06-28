import { GET_BOOKS_FAILURE, GET_BOOKS_REQUEST, GET_BOOKS_SUCCESS } from "./actionTypes"
import axios from 'axios'
export const getbookRequest = ()=>{
    return {
        type: GET_BOOKS_REQUEST
    }
}


export const getbookSuccess = (payload)=>{
    return {
        type: GET_BOOKS_SUCCESS,
        payload
    }
}
export const getbookError = ()=>{
    return {
        type: GET_BOOKS_FAILURE
    }
}

export const getBooks = (params)=> dispatch=>{
    dispatch(getbookRequest())

    return axios.get("http://localhost:8080/books",params)
    .then(r=>dispatch(getbookSuccess(r.data)))
    .catch(e=>dispatch(getbookError()))
}
