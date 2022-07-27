import * as actions from "../constants";
import { signup } from "./signup";
import {logIn} from "./logIn";
import { all, fork, takeLatest } from "redux-saga/effects";

function* signupBind(){
    yield takeLatest(actions.SIGN_UP_REQUEST, signup);
}
function* logInBind(){
    yield takeLatest(actions.LOG_IN_REQUEST,logIn);
}

function* viewPollBind(){
    yield takeLatest(actions.VIEWPOLL_REQUEST,logIn);
}

export default function* rootSaga(){
    yield all([fork(signupBind),fork(logInBind),fork(viewPollBind)])
}

