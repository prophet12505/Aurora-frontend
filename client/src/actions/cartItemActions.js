import * as api from "../api";
import { ADD_TO_CART,GET_ALL_CART_ITEMS } from "../constants/actionTypes";
// export const getProductByCategoryAction=(categoryId)=>async(dispatch)=>{
//     console.log("ACTION GET_PRODUCT_BY_CATEGORY");
//     const {data}=await api.getProductByCategory(categoryId);
//     console.log(data);
//     dispatch({
//         type:GET_PRODUCT_BY_CATEGORY,
//         payload:data
//     });
// }
export const addToCartAction=(userId,productId,quantity)=>async(dispatch)=>{
    console.log("ACTION ADD_TO_CART ");
    console.log({userId,productId,quantity});
    const {data}= await api.addToCart(userId,productId,quantity);
    //there's no need to dispatch, because nothing we need to return
};

export const getAllCartItemsAction=(userId)=>async(dispatch)=>{

    console.log("ACTION GET_ALL_CART_ITEMS ");
    const {data}=await api.getAllCartItems(userId);
    console.log(data);
    dispatch({
        type:GET_ALL_CART_ITEMS,
        payload:data
    });
    
}