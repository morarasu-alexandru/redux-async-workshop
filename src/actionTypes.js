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

export const simpleSagaActions = {
  resetBookList: "SIMPLE-SAGA--RESET-BOOK-LIST",
  getBookList: "SIMPLE-SAGA--GET-BOOK-LIST",
  getBookListRejected: "SIMPLE-SAGA--GET-BOOK-LIST-REJECTED",
  getBookListFulfilled: "SIMPLE-SAGA--GET-BOOK-LIST-FULFILLED",
};

export const simpleSagaExerciseActions = {
  resetBookList: "SIMPLE-SAGA-EXERCISE--RESET-BOOK-LIST",
  getBookList: "SIMPLE-SAGA-EXERCISE--GET-BOOK-LIST",
  getBookListRejected: "SIMPLE-SAGA-EXERCISE--GET-BOOK-LIST-REJECTED",
  getBookListFulfilled: "SIMPLE-SAGA-EXERCISE--GET-BOOK-LIST-FULFILLED",
  cancelGetBookList: "SIMPLE-SAGA-EXERCISE--CANCEL-GET-BOOK",
};

export const simpleSagaExerciseFinishedActions = {
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
