import {put,call} from "@redux-saga/core/effects";
import axios from "axios";
import { signUpError, signUpSuccess } from "../actions/index";


export function* signup(action){
    const [username,password,role]=action.payload;
    try{
    const response=yield call(
        axios.get,
        `https://secure-refuge-14993.herokuapp.com/add_user?username=${username}&password=${password}&role=${role}`
    );
   if(response && response.data){
    yield put(signUpSuccess({
        response:response.data
    }))
   }
   else{
    yield put(signUpError({error:"NO DATA "}))
   }
}
catch(error){
    yield put(signUpError({error:"NO DATA "}))

}

}