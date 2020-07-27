import { pureReduxActions } from "../../actionTypes";

export const getBookList = () => ({
  type: pureReduxActions.getBookList,
});

export const getBookListRejected = (err) => ({
  type: pureReduxActions.getBookListRejected,
  payload: { err },
});

export const getBookListFulfilled = (newList) => ({
  type: pureReduxActions.getBookListFulfilled,
  payload: { newList },
});

export const resetBookList = () => ({
  type: pureReduxActions.resetBookList,
});
