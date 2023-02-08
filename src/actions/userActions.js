import * as api from "../api";
import { LOGIN,SIGNUP,VERIFY_EMAIL,KEEP_LOGIN_STATE } from "../constants/actionTypes";
export const loginAction=(userLoginData)=>async(dispatch)=>{
    console.log("ACTION LOGIN");
    const {data} = await api.login(userLoginData);
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
export const verifyEmailAction=(token)=>async(dispatch)=>{
    console.log("ACTION VERIFY_EMAIL");
    console.log("token:"+token);
    const {data}=await api.verifyEmail(token);
    
    dispatch({
        type:VERIFY_EMAIL,
        payload:data
    });
}
export const keepLoginStateAction=(data)=>async(dispatch)=>{
   // console.log("ACTION KEEP_LOGIN_STATE");
   // console.log("token:"+token);
   // const {data}=await api.keepLoginState(token);
   //const data=JSON.parse(localStorage.getItem('currentUser'));
    dispatch({
        type:KEEP_LOGIN_STATE,
        payload:data
    });
}