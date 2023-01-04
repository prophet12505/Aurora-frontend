import { SIGNUP,VERIFY_EMAIL } from "../constants/actionTypes";
export default (message={},action)=>{
    // console.log("Reducer: ", message, action);
    switch(action.type){
        case SIGNUP:
            {
                console.log("SIGNUPREDUCER");
                console.log(action.payload);
                return action.payload;
            }
        case VERIFY_EMAIL:
            {
            console.log("VERIFY_EMAIL REDUCER");
            console.log(action.payload);
            return action.payload;
            }
        default:
                return message;
                //default must return posts, otherwise there will be some issues
        }
    }
    