import {combineReducers} from "redux";
import products from "./products";
import users from "./users";
import message from "./message";
export default combineReducers({
   products,users,message
});