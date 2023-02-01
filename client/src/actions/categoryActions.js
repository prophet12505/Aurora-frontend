import * as api from "../api";
import { GET_ALL_CATEGORIES } from "../constants/actionTypes";
export const getAllCategoriesAction=()=>async(dispatch)=>{
    
    const {data}=await api.getAllCategories();
    //console.log("ACTION GET_ALL_CATEGORIES");
    //console.log(data);
    dispatch({
        type:GET_ALL_CATEGORIES,
        payload:data
    });
}