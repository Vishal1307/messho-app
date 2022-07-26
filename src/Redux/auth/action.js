import { LOGIN_REQUEST,LOGIN_SUCCESS,LOGIN_FAILURE,SIGNUP_FAILURE,SIGNUP_REQUEST,SIGNUP_SUCCESS } from "./actionType";
import axios from "axios";

export const loginRequest=()=>({
    type:LOGIN_REQUEST
})
export const loginSucess=(payload)=>({
    type:LOGIN_SUCCESS,
    payload
})
export const loginFailure=()=>({
    type:LOGIN_FAILURE,
    
})
export const signFailure=()=>({
    type:SIGNUP_FAILURE
})
export const signSucess=(payload)=>({
    type:SIGNUP_SUCCESS,
    payload
})
export const signRequest=()=>({
    type:SIGNUP_REQUEST

})
export const signUpData=(payload)=>{
    return async (dispatch)=>{
        dispatch(signRequest())
        let d=await fetch("/signup",{
            method: "POST",
            body:JSON.stringify(payload),
            headers: {
                'Content-Type': 'application/json',
              }
        })
        let res=await d.json()
        console.log(res)
    }

}