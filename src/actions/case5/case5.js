import { observableReduxActions } from "../../actionTypes";

export const getBookList = () => ({
  type: observableReduxActions.getBookList,
});

export const getBookListRejected = (err) => ({
  type: observableReduxActions.getBookListRejected,
  payload: { err },
});

export const getBookListFulfilled = (newList) => ({
  type: observableReduxActions.getBookListFulfilled,
  payload: { newList },
});

export const getBookListCancel = () => ({
  type: observableReduxActions.cancelGetBookList,
});

export const resetBookList = () => ({
  type: observableReduxActions.resetBookList,
});
