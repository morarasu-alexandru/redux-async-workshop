import { all, fork } from "redux-saga/effects";
import { watchGetBookList } from "./case3";
import { watchCancelableGetBookListFinished } from "./exercise/1/exercise1Finished";
import { watchCancelableGetBookList } from "./exercise/1/exercise1";

export default function* rootSaga() {
  yield all([
    fork(watchGetBookList),
    fork(watchCancelableGetBookList),
    fork(watchCancelableGetBookListFinished),
  ]);
}
