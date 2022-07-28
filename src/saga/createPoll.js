import { put, call } from "@redux-saga/core/effects";
import axios from "axios";
import { createPollSuccess, createPollError } from "../actions/index";

export function* createPoll(action) {
  const { title,opt1,opt2,opt3,opt4 } = action.payload;
  try {
    const response = yield call(
      axios.get,
      `https://secure-refuge-14993.herokuapp.com/add_poll?title=${title}&options=${opt1}____${opt2}____${opt3}____${opt4}`
    );
    console.log(response, "createPolllingggg");
    if (response && response.data) {
      yield put(
        createPollSuccess({
          response: response.data,
        })
      );
    } else {
      yield put(createPollError({ error: "NO DATA " }));
    }
  } catch (error) {
    yield put(createPollError({ error: "NO DATA " }));
  }
}
