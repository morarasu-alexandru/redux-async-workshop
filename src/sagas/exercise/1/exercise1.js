import { put, takeLatest, delay } from "redux-saga/effects";
import { incrementCounter } from "../../../actions/exercise/1/exercise1";
import { counterSagaActions } from "../../../actionTypes";

//add delay to saga function accordingly
function* asyncIncrementSaga() {
  yield put(incrementCounter());
}

// make the watcher function listen to all actions of type 'incrementAsync'
export function* watchAsyncIncrement() {
  yield takeLatest(counterSagaActions.incrementAsync, asyncIncrementSaga);
}
