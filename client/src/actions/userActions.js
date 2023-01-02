import * as api from "../api";
import { LOGIN,SIGNUP } from "../constants/actionTypes";
export const loginAction=(userLoginData)=>async(dispatch)=>{
    console.log("ACTION LOGIN");
    const {data}=await api.login(userLoginData);
    dispatch({
        type:LOGIN,
        payload:data
    });
}
export const signupAction=(userSignupData)=>async(dispatch)=>{
    console.log("ACTION SIGNUP");
    const {data}=await api.signup(userSignupData);
    dispatch({
        type:SIGNUP,
        payload:data
    });
}