import { call, put, takeLatest } from "redux-saga/effects";
import { getBooksApi } from "../../../mock";
import {
  getBookListFulfilled,
  getBookListRejected,
} from "../../../actions/exercise/2/exercise2";
import { simpleSagaExerciseActions } from "../../../actionTypes";

function* fetchBookListSaga() {
  try {
    const bookList = yield call(getBooksApi);
    yield put(getBookListFulfilled(bookList));
  } catch (err) {
    yield put(getBookListRejected({ err }));
  }
}

export function* watchCancelableGetBookList() {
  yield takeLatest(simpleSagaExerciseActions.getBookList, fetchBookListSaga);
}
