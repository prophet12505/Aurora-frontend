import { LOGIN,KEEP_LOGIN_STATE } from "../constants/actionTypes";
export default (currentUser={loggedIn:false},action)=>{
    // console.log("Reducer: ", currentUser, action);
    switch(action.type){
        case LOGIN:
            {
            console.log("LOGIN REDUCER");
            console.log(action.payload);
            //successfully loggedIn 
            if(action.payload && action.payload.loggedIn){
                
                localStorage.setItem('userToken',btoa(action.payload.email));

                localStorage.setItem('currentUser',JSON.stringify(action.payload));
                //console.log("token loaded: "+localStorage.getItem('userToken'));
            }
            return action.payload;
            }
        case KEEP_LOGIN_STATE:
            {
                console.log("KEEP_LOGIN_STATE REDUCER");
                console.log(action.payload);
               
               if(action.payload)
                return action.payload;
                else
                return currentUser;
            }
        default:
                return currentUser;
                //default must return posts, otherwise there will be some issues
        }
    }
    