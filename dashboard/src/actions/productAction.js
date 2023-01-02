import * as api from "../api";
import { CREATE_PRODUCT } from "../constants/actionType";
export const createProductAction=(product)=>async(dispatch)=>{
    console.log("ACTION CREATE_PRODUCT");
    const {data}=await api.createProduct(product);
    dispatch({
        type:CREATE_PRODUCT,
        payload:data
    })
}
