import { call, debounce, put, takeLatest } from "redux-saga/effects";
import { debounceActions } from "../../../actionTypes";
import {
  getSizeFulfilled,
  getSizeRejected,
  postSizeFulfilled,
  postSizeRejected,
  savePaneSize,
} from "../../../actions/exercise/3/exercise3";
import { getSizeApi, saveSizeApi } from "../../../mock";

function* postSizeSaga(size) {
  try {
    yield call(saveSizeApi, size);
    yield put(postSizeFulfilled());
  } catch (err) {
    yield put(postSizeRejected(err));
  }
}

function* getSizeSaga() {
  try {
    const size = yield call(getSizeApi);
    yield put(getSizeFulfilled(parseInt(size)));
  } catch (err) {
    yield put(getSizeRejected(err));
  }
}

function* paneResizeSaga(action) {
  const { size } = action.payload;
  yield console.log("I have been called and received the size: ", size);

  // 'savePaneSize' - to save the pane size in 'front end'
  // 'postSizeSaga' - to post the pane size to 'server'
}

export function* watchPaneResize() {
  yield takeLatest(debounceActions.changeSize, paneResizeSaga);
  yield takeLatest(debounceActions.getSize, getSizeSaga);
}
