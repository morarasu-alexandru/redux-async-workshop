import { call, put, takeLatest, fork, cancel, take } from "redux-saga/effects";
import { getBooksApi } from "../../../mock";
import {
  getBookList,
  getBookListFulfilled,
  getBookListRejected,
} from "../../../actions/exercise/2/exercise2";
import { simpleSagaExerciseActions } from "../../../actionTypes";

function* fetchBookListSaga() {
  yield put(getBookList());
  try {
    const bookList = yield call(getBooksApi);
    yield put(getBookListFulfilled(bookList));
  } catch (err) {
    yield put(getBookListRejected({ err }));
  }
}

export function* watchCancelableGetBookList() {
  // todo: take use of "simpleSagaExerciseActions.cancelGetBookList" action type
  yield takeLatest(
    simpleSagaExerciseActions.startGetBookList,
    fetchBookListSaga
  );
}
