import * as api from "../api";
import { GET_ALL_PRODUCTS } from "../constants/actionTypes";
export const getAllProductsAction=()=>async(dispatch)=>{
    console.log("ACTION GET_ALL_PRODUCTS");
    const {data}=await api.fetchAllProducts();
    dispatch({
        type:GET_ALL_PRODUCTS,
        payload:data
    })
}
