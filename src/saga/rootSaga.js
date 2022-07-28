 import * as actions from "../constants";
 import { signup } from "./signup";
 import {logIn} from "./logIn";
 import {createPoll} from "./createPoll"
 import { all, fork, takeLatest } from "redux-saga/effects";
 import {viewPoll} from "./viewPoll";
 import {deletePoll} from "./deletePoll";

 function* signupBind(){
    yield takeLatest(actions.SIGN_UP_REQUEST, signup);
 }
 function* logInBind(){
     yield takeLatest(actions.LOG_IN_REQUEST,logIn);
 }

 function* viewPollBind(){
    yield takeLatest(actions.VIEW_POLL_REQUEST,viewPoll);
}

 function* createPollBind() {
   yield takeLatest(actions.CREATE_POLL_REQUEST, createPoll);
 }

//  function* deletePollBind() {
//   yield takeLatest(actions.DELETE_POLL_REQUEST, deletePoll);
//  }

 export default function* rootSaga(){
     yield all([fork(signupBind),fork(logInBind),fork(viewPollBind),fork(createPollBind)])
 }

