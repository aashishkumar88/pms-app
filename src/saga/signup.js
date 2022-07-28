import { put, call } from "@redux-saga/core/effects";
import axios from "axios";
import { signUpError, signUpSuccess } from "../actions/index";

export function* signup(action) {
  const { username, password, role } = action.payload;
  try {
    const response = yield call(
      axios.get,
      `https://secure-refuge-14993.herokuapp.com/add_user?username=${username}&password=${password}&role=${role}`
    );
    console.log(response, "ashfgh");
    if (response && response.data) {
         console.log(response.data,"rollleelele")
       
      if (response.data.error === 0) {
        yield put(
          signUpSuccess({
            response: response.data,
          })
          
        );
         localStorage.setItem("role", response.data.data.role);
      }
      else {
      yield put(signUpError({ error: "NO DATA ",message:response.data.message }));
    }
    } 
  } catch (error) {
    yield put(signUpError({ error: "NO DATA " }));
  }
}
