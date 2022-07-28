import { combineReducers } from "redux";
import signup from"./signup";
import logIn from "./logIn";
import viewPoll from "./viewPoll";
import createPoll from "./createPoll"

const rootReducer=combineReducers({
    signupState:signup,
    logInState:logIn,
    viewPollState:viewPoll,
    createPollState:createPoll,
})

export default rootReducer;