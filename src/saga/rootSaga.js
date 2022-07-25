import * as actions from "../constant";
import { signUp } from "./signUp";
import { all, fork, takeLatest } from "redux-saga/effects";

function* signupBind(){
    yield takeLatest(actions.SIGN_UP_REQUEST, signup);
}

export default function* rootSaga(){
    yield all([fork(signupBind)])
}

