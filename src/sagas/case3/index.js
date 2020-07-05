import { call, put, takeLatest } from "redux-saga/effects";

import {
  getBookListFulfilled,
  getBookListRejected,
} from "../../actions/case3/case3";
import { simpleSagaActions } from "../../actionTypes";
import { getBooksApi } from "../../mock";

function* fetchBookListSaga() {
  try {
    const bookList = yield call(getBooksApi);
    yield put(getBookListFulfilled(bookList));
  } catch (err) {
    yield put(getBookListRejected(err));
  }
}

export function* watchGetBookList() {
  yield takeLatest(simpleSagaActions.getBookList, fetchBookListSaga);
}
