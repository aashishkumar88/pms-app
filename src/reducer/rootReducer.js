import { combineReducers } from "redux";
import signup from"./signup";

const rootReducer=combineReducers({
    signupState:signup,
})

export default rootReducer;