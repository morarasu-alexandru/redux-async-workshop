import {
  call,
  cancel,
  cancelled,
  fork,
  put,
  take,
  takeLatest,
} from "redux-saga/effects";

import {
  getBookList,
  getBookListFulfilled,
  getBookListRejected,
} from "../../../actions/exercise/2/exercise2Finished";
import { simpleSagaExerciseFinishedActions } from "../../../actionTypes";
import { getBooksApi } from "../../../mock";

function* fetchBookListSaga() {
  yield put(getBookList());
  try {
    console.log("here1");
    const bookList = yield call(getBooksApi);
    console.log("here2");
    yield put(getBookListFulfilled(bookList));
  } catch (err) {
    yield put(getBookListRejected(err));
  } finally {
    if (yield cancelled()) {
      console.log("canceled");
    }
  }
}

export function* fetchBookListWatcher() {
  const fetchBookListSagaTask = yield fork(fetchBookListSaga);

  yield take(simpleSagaExerciseFinishedActions.cancelGetBookList);

  yield cancel(fetchBookListSagaTask);
}

export function* watchCancelableGetBookListFinished() {
  yield takeLatest(
    simpleSagaExerciseFinishedActions.startGetBookList,
    fetchBookListWatcher
  );
}
