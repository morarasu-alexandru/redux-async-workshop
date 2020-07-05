import {
  call,
  put,
  takeEvery,
  cancelled,
  take,
  fork,
  cancel,
} from "redux-saga/effects";

import {
  cancelGetBookList,
  getBookListFulfilled,
  getBookListRejected,
} from "../../../actions/exercise/1/exercise1Finished";
import { simpleSagaExerciseFinishedActions } from "../../../actionTypes";
import { getBooksApi } from "../../../mock";

function* fetchBookListSaga() {
  try {
    const bookList = yield call(getBooksApi);
    yield put(getBookListFulfilled(bookList));
  } catch (err) {
    yield put(getBookListRejected({ err }));
  }
}

export function* watchCancelableGetBookList() {
  while (yield take(simpleSagaExerciseFinishedActions.getBookList)) {
    const fetchBookListSagaTask = yield fork(fetchBookListSaga);

    yield take(simpleSagaExerciseFinishedActions.cancelGetBookList);

    yield cancel(fetchBookListSagaTask);
  }
}
