import {put,call} from "@redux-saga/core/effects";
import axios from "axios";
import { logInSuccess,logInError } from "../actions/index";

export function* logIn(action){
    const {username,password}=action.payload;
    try{
    const response=yield call(
        axios.get,
      `https://secure-refuge-14993.herokuapp.com/login?username=${username}&password=${password}`
       
    );
    console.log(response,"ashfgh")
   if(response && response.data){
    // if (response.data.error === 0) {
    yield put(logInSuccess({
        response:response.data
    }
    ))
   }
   else{
    yield put(logInError({error:"NO DATA "}))
   }
}

catch(error){
    yield put(logInError({error:"NO DATA "}))

}
}