import { LOGIN,SIGNUP } from "../constants/actionTypes";
export default (currentUser={loggedIn:false},action)=>{
    console.log("Reducer: ", currentUser, action);
    switch(action.type){
        case LOGIN:
            {
            console.log("LOGIN REDUCER");
            console.log(action.payload);
            return action.payload;
            }
  
        default:
                return currentUser;
                //default must return posts, otherwise there will be some issues
        }
    }
    