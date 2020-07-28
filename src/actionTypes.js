export const pureReduxActions = {
  resetBookList: "PURE-REDUX--RESET-BOOK-LIST",
  getBookList: "PURE-REDUX--GET-BOOK-LIST",
  getBookListRejected: "PURE-REDUX--GET-BOOK-LIST-FAILURE",
  getBookListFulfilled: "PURE-REDUX--GET-BOOK-LIST-FULFILLED",
};

export const thunkReduxActions = {
  resetBookList: "THUNK-REDUX--RESET-BOOK-LIST",
  getBookList: "THUNK-REDUX--GET-BOOK-LIST",
  getBookListRejected: "THUNK-REDUX--GET-BOOK-LIST-REJECTED",
  getBookListFulfilled: "THUNK-REDUX--GET-BOOK-LIST-FULFILLED",
};

export const observableReduxActions = {
  getBookList: "OBSERVABLE-REDUX--GET-BOOK-LIST",
  getBookListRejected: "OBSERVABLE-REDUX--GET-BOOK-LIST-REJECTED",
  getBookListFulfilled: "OBSERVABLE-REDUX--GET-BOOK-LIST-FULFILLED",
  cancelGetBookList: "OBSERVABLE-REDUX-EXERCISE--CANCEL-GET-BOOK",
  resetBookList: "OBSERVABLE-REDUX--RESET-BOOK-LIST",
};

export const simpleSagaActions = {
  resetBookList: "SIMPLE-SAGA--RESET-BOOK-LIST",
  getBookList: "SIMPLE-SAGA--GET-BOOK-LIST",
  getBookListRejected: "SIMPLE-SAGA--GET-BOOK-LIST-REJECTED",
  getBookListFulfilled: "SIMPLE-SAGA--GET-BOOK-LIST-FULFILLED",
};

export const simpleSagaExerciseActions = {
  startGetBookList: "SIMPLE-SAGA-EXERCISE--START-GET-BOOK-LIST",
  getBookList: "SIMPLE-SAGA-EXERCISE--GET-BOOK-LIST",
  getBookListRejected: "SIMPLE-SAGA-EXERCISE--GET-BOOK-LIST-REJECTED",
  getBookListFulfilled: "SIMPLE-SAGA-EXERCISE--GET-BOOK-LIST-FULFILLED",
  resetBookList: "SIMPLE-SAGA-EXERCISE--RESET-BOOK-LIST",
  cancelGetBookList: "SIMPLE-SAGA-EXERCISE--CANCEL-GET-BOOK",
};

export const simpleSagaExerciseFinishedActions = {
  startGetBookList: "SIMPLE-SAGA-EXERCISE--START-GET-BOOK-LIST--FINISHED",
  resetBookList: "SIMPLE-SAGA-EXERCISE--RESET-BOOK-LIST--FINISHED",
  getBookList: "SIMPLE-SAGA-EXERCISE--GET-BOOK-LIST--FINISHED",
  getBookListRejected: "SIMPLE-SAGA-EXERCISE--GET-BOOK-LIST-REJECTED--FINISHED",
  getBookListFulfilled:
    "SIMPLE-SAGA-EXERCISE--GET-BOOK-LIST-FULFILLED--FINISHED",
  cancelGetBookList: "SIMPLE-SAGA-EXERCISE--CANCEL-GET-BOOK--FINISHED",
};

export const counterSagaActions = {
  increment: "COUNTER-SAGA--INCREMENT",
  incrementAsync: "COUNTER-SAGA--INCREMENT-ASYNC",
  reset: "COUNTER-SAGA--RESET",
};

export const counterSagaFinishedActions = {
  increment: "COUNTER-SAGA--INCREMENT-FINISHED",
  incrementAsync: "COUNTER-SAGA--INCREMENT-ASYNC-FINISHED",
  reset: "COUNTER-SAGA--RESET-FINISHED",
};

export const debounceActions = {
  changeSize: "DEBOUNCE--CHANGE-SIZE",
  saveSize: "DEBOUNCE--SAVE-SIZE",
  postSize: "DEBOUNCE--POST-SIZE",
  postSizeFulfilled: "DEBOUNCE--POST-SIZE-FULFILLED",
  postSizeRejected: "DEBOUNCE--POST-SIZE-REJECTED",
  getSize: "DEBOUNCE--GET-SIZE",
  getSizeFulfilled: "DEBOUNCE--GET-SIZE-FULFILLED",
  getSizeRejected: "DEBOUNCE--GET-SIZE-REJECTED",
};

export const debounceFinishedActions = {
  changeSize: "DEBOUNCE--CHANGE-SIZE-FINISHED",
  saveSize: "DEBOUNCE--SAVE-SIZE-FINISHED",
  postSize: "DEBOUNCE--POST-SIZE-FINISHED",
  postSizeFulfilled: "DEBOUNCE--POST-SIZE-FULFILLED-FINISHED",
  postSizeRejected: "DEBOUNCE--POST-SIZE-REJECTED-FINISHED",
  getSize: "DEBOUNCE--GET-SIZE-FINISHED",
  getSizeFulfilled: "DEBOUNCE--GET-SIZE-FULFILLED-FINISHED",
  getSizeRejected: "DEBOUNCE--GET-SIZE-REJECTED-FINISHED",
};

export const raceActions = {
  startRace: "RACE-ACTIONS--START-RACE",
  rabbitStart: "RACE-ACTIONS--RABBIT-START",
  rabbitSleep: "RACE-ACTIONS--RABBIT-SLEEP",
  rabbitRun: "RACE-ACTIONS--RABBIT-RUN",
  turtleStart: "RACE-ACTIONS--TURTLE-START",
  rabbitWin: "RACE-ACTIONS--RABBIT-WIN",
  turtleWin: "RACE-ACTIONS--TURTLE-WIN",
  reset: "RACE-ACTIONS--RESET",
};
