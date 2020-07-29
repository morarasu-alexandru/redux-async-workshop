import { put, takeEvery, delay } from "redux-saga/effects";
import { incrementCounter } from "../../../actions/exercise/1/exercise1Finished";
import { counterSagaFinishedActions } from "../../../actionTypes";

function* asyncIncrementSaga() {
  yield delay(1000);
  yield put(incrementCounter());
}

export function* watchAsyncIncrementFinished() {
  yield takeEvery(
    counterSagaFinishedActions.incrementAsync,
    asyncIncrementSaga
  );
}
