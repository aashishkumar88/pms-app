import { put, call } from "@redux-saga/core/effects";
import axios from "axios";
import { logInSuccess, logInError } from "../actions/index";
import jwt_decode from "jwt-decode";

export function* logIn(action) {
  const { username, password } = action.payload;
  try {
    const response = yield call(
      axios.get,
      `https://secure-refuge-14993.herokuapp.com/login?username=${username}&password=${password}`
    );
    // console.log(response,"responsinggggg")
    var token = response.data.token;
    var decoded = jwt_decode(token);

    console.log(decoded, "decodeddddddd");
    if (response && response.data) {
      yield put(
        logInSuccess({
          response: response.data,
        })
      );
      localStorage.setItem("token", JSON.stringify(response.data.token));
    } else {
      yield put(logInError({ error: "NO DATA " }));
    }
  } catch (error) {
    yield put(logInError({ error: "NO DATA " }));
  }
}
