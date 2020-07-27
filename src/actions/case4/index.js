import { simpleSagaActions } from "../../actionTypes";

export const getBookList = () => ({
  type: simpleSagaActions.getBookList,
});

export const getBookListRejected = (err) => ({
  type: simpleSagaActions.getBookListRejected,
  payload: { err },
});

export const getBookListFulfilled = (newList) => {
  return {
    type: simpleSagaActions.getBookListFulfilled,
    payload: { newList },
  };
};

export const resetBookList = () => ({
  type: simpleSagaActions.resetBookList,
});
