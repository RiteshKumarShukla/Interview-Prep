import { GET_PRODUCTS_ERROR, GET_PRODUCTS_LOADING, GET_PRODUCTS_SUCCESS } from "./product.types"
import axios from 'axios'
// Product actions here
export const getProductsData = ()=> async(dispatch)=>{
    dispatch({type:GET_PRODUCTS_LOADING});
    
    try{
        let response = await axios.get("http://localhost:8080/products");
        dispatch({type:GET_PRODUCTS_SUCCESS,payload:response.data})
        return response.data;

    }
    catch(e){
        dispatch({type:GET_PRODUCTS_ERROR})
    }
}