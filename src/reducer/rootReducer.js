import { combineReducers } from "redux";
import signup from"./signup";
import logIn from "./logIn";
import viewPoll from "./viewPoll";

const rootReducer=combineReducers({
    signupState:signup,
    logInState:logIn,
    viewPollState:viewPoll,
})

export default rootReducer;