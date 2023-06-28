import { GET_BOOKS_ERROR, GET_BOOKS_REQUEST, GET_BOOKS_SUCCESS } from "./App.ActionTypes"
import axios from 'axios';
export const getBooksRequest = () =>{
    return {
        type:GET_BOOKS_REQUEST
    }
}

export const getBooksSuccess = (payload)=>{
    return {
        type:GET_BOOKS_SUCCESS,
        payload
    }
}

export const getBooksError = () => {
    return {
        type:GET_BOOKS_ERROR
    }
} 

export const getBooks = (params) => dispatch=>{
    dispatch(getBooksRequest());
    return axios.get('http://localhost:8000/books',params)
    .then(r=>dispatch(getBooksSuccess(r.data)))
    .catch(e=>dispatch(getBooksError()))
}