import { race, takeLatest, delay, call, put } from "redux-saga/effects";
import { raceActions } from "../../actionTypes";
import {
  rabbitRun,
  rabbitSleep,
  rabbitStart,
  rabbitWin,
  turtleStart,
  turtleWin,
} from "../../actions/case5";

export const rabbitStartTime = 2;
export const rabbitRunTime = 2;
export const turtleRunTime = 8;

function* rabbitRaceSaga(sleepTime) {
  yield put(rabbitStart());
  yield delay(rabbitStartTime * 1000);
  yield put(rabbitSleep());
  yield delay(sleepTime);
  yield put(rabbitRun());
  yield delay(rabbitRunTime * 1000);
  return "rabbit";
}

function* turtleRaceSaga() {
  yield put(turtleStart());
  yield delay(turtleRunTime * 1000);
}

function* rabbitTurtleRaceSaga(actionStartRace) {
  const { rabbitSleepTime } = actionStartRace.payload;
  console.log("rabbitSleepTime: ", rabbitSleepTime);
  const { response, timeout } = yield race({
    response: call(rabbitRaceSaga, rabbitSleepTime),
    timeout: call(turtleRaceSaga),
  });

  if (response) {
    yield put(rabbitWin());
  } else {
    yield put(turtleWin());
  }
}

export function* watchRaceStart() {
  yield takeLatest(raceActions.startRace, rabbitTurtleRaceSaga);
}
