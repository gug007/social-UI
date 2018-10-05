import { takeEvery, takeLatest, call, put, all } from "redux-saga/effects";
import {
  MESSAGES_REQUEST,
  MESSAGES_SUCCESS,
  MESSAGES_FAILURE
} from "./constants";

const fetchMessages = ({ data }) => Premise.resolve(); // call fetch;

function* messagesFetching(action) {
  try {
    const response = yield call(fetchMessages, action);
    yield put({ type: MESSAGES_SUCCESS, payload: response.data });
  } catch (error) {
    yield put({ type: MESSAGES_FAILURE });
  }
}

export default function* messagesFetchWatcher() {
  yield all([takeLatest(MESSAGES_REQUEST, messagesFetching)]);
}
