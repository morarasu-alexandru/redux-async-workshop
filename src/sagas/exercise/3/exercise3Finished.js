import { call, debounce, put, takeLatest } from "redux-saga/effects";
import { debounceFinishedActions } from "../../../actionTypes";
import {
  getSizeFulfilled,
  getSizeRejected,
  postSizeFulfilled,
  postSizeRejected,
  savePaneSize,
} from "../../../actions/exercise/3/exercise3Finished";
import { getSizeFinishedApi, saveSizeFinishedApi } from "../../../mock";

function* postSizeSaga(size) {
  try {
    yield call(saveSizeFinishedApi, size);
    yield put(postSizeFulfilled());
  } catch (err) {
    yield put(postSizeRejected(err));
  }
}

function* getSizeSaga() {
  try {
    const size = yield call(getSizeFinishedApi);
    yield put(getSizeFulfilled(parseInt(size)));
  } catch (err) {
    yield put(getSizeRejected(err));
  }
}

function* paneResizeSaga(action) {
  const { size } = action.payload;
  yield put(savePaneSize(size));
  yield call(postSizeSaga, size);
}

export function* watchPaneResizeFinished() {
  yield debounce(500, debounceFinishedActions.changeSize, paneResizeSaga);
  yield takeLatest(debounceFinishedActions.getSize, getSizeSaga);
}
