import {createActions} from "redux-actions";
import * as constant from "../constants";

export const signUpRequest= createActions(constant.SIGN_UP_REQUEST);
export const signUpSuccess=createActions(constant.SIGN_UP_SUCCESS);
export const signUpError=createActions(constant.SIGN_UP_ERROR);