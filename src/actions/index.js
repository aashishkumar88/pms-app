import { createAction } from "redux-actions";
import * as constant from "../constants";

export const signUpRequest = createAction(constant.SIGN_UP_REQUEST);
export const signUpSuccess = createAction(constant.SIGN_UP_SUCCESS);
export const signUpError = createAction(constant.SIGN_UP_ERROR);

export const logInRequest = createAction(constant.LOG_IN_REQUEST);
export const logInSuccess = createAction(constant.LOG_IN_SUCCESS);
export const logInError = createAction(constant.LOG_IN_ERROR);

export const viewPollRequest = createAction(constant.VIEW_POLL_REQUEST);
export const viewPollSuccess = createAction(constant.VIEW_POLL_SUCCESS);
export const viewPollError = createAction(constant.VIEW_POLL_ERROR);

export const createPollRequest = createAction(constant.CREATE_POLL_REQUEST);
export const createPollSuccess = createAction(constant.CREATE_POLL_SUCCESS);
export const createPollError = createAction(constant.CREATE_POLL_ERROR);

export const deletePollRequest = createAction(constant.DELETE_POLL_REQUEST);
export const deletePollSuccess = createAction(constant.DELETE_POLL_SUCCESS);
export const deletePollError = createAction(constant.DELETE_POLL_ERROR);

