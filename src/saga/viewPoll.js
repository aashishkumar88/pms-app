import { viewPollSuccess, viewPollError } from "../actions/index";
import { put, call } from "@redux-saga/core/effects";
import axios from "axios";

export function* viewPoll(action) {
  try {
    const response = yield call(
      axios.get,
      `https://secure-refuge-14993.herokuapp.com/list_polls`
    );
   console.log(response,"viewpolllllssss");
    if (response && response.data) {
      yield put(viewPollSuccess({ response: response.data }));
      
    } else {
      yield put(viewPollError({ error: "NO DATA" }));
    }
  } catch (error) {
    yield put(viewPollError({ error: "NO DATA" }));
  }
}
export default viewPoll;
