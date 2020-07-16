import { all, fork } from "redux-saga/effects";
import { watchGetBookList } from "./case3";
import { watchCancelableGetBookListFinished } from "./exercise/2/exercise2Finished";
import { watchCancelableGetBookList } from "./exercise/2/exercise2";
import { watchAsyncIncrementFinished } from "./exercise/1/exercise2Finished";
import { watchAsyncIncrement } from "./exercise/1/exercise1";
import { watchPaneResizeFinished } from "./exercise/3/exercise3Finished";
import { watchPaneResize } from "./exercise/3/exercise3";

export default function* rootSaga() {
  yield all([
    fork(watchGetBookList),
    fork(watchCancelableGetBookList),
    fork(watchCancelableGetBookListFinished),
    fork(watchAsyncIncrement),
    fork(watchAsyncIncrementFinished),
    fork(watchPaneResizeFinished),
    fork(watchPaneResize),
  ]);
}
