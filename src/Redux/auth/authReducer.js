import { LOGIN_REQUEST,LOGIN_SUCCESS,LOGIN_FAILURE, SIGNUP_REQUEST, SIGNUP_SUCCESS } from "./actionType"

const init={
    isAuth:false,
    token:"",
    isLoading:false,
    isError:false

}
export const authReducer=(store,{type,payload}) =>{
    switch(type){
        case LOGIN_REQUEST:
            return {...store,isLoading:true}
        case LOGIN_SUCCESS:
            return {...store,isLoading:false,isAuth:true,token:payload}
        case LOGIN_FAILURE:
            return {...store,isLoading:false,isAuth:false,isError:true}
        case SIGNUP_REQUEST:
            return {...store,isLoading:true}
        case SIGNUP_SUCCESS:
            return {...store,isLoading:false}

        default:
            return {...store}
    }

}