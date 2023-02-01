import {combineReducers} from "redux";
import products from "./products";
import currentUser from "./currentUser";
import message from "./message";
import selectedProduct from "./selectedProduct";
import categories from "./categories";
import cartItems from "./cartItems";
export default combineReducers({
   products,message,selectedProduct,currentUser,categories,cartItems
});