import { SIGNUP } from "../constants/actionTypes";
export default (message={},action)=>{
    console.log("Reducer: ", message, action);
    switch(action.type){
        case SIGNUP:
            {
            console.log("SIGNUP REDUCER");
            console.log(action.payload);
            return action.payload;
            }
  
        default:
                return message;
                //default must return posts, otherwise there will be some issues
        }
    }
    