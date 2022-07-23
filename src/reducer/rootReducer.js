import { combineReducers } from "redux";
import signup from"./signup";

const rootReducer=combineReducer({
    signupState:signup,
})

export default rootReducer;