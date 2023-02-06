import { GET_ALL_CART_ITEMS } from "../constants/actionTypes";

export default (cartItems=[],action)=>{
  
    switch(action.type){
        case GET_ALL_CART_ITEMS:
        {
            console.log("GET_ALL_CART_ITEMS  reducer   ");
            
            return action.payload;
            
            
        }
        default:
            return cartItems;
    }
}

