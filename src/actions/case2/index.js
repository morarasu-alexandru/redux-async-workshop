import { thunkReduxActions } from "../../actionTypes";
import { getBooksApi } from "../../mock";

export const getBookList = () => ({
  type: thunkReduxActions.getBookList,
});

export const getBookListRejected = (err) => ({
  type: thunkReduxActions.getBookListRejected,
  payload: { err },
});

export const getBookListFulfilled = (newList) => ({
  type: thunkReduxActions.getBookListFulfilled,
  payload: { newList },
});

export const getBookListThunk = () => (dispatch) => {
  dispatch(getBookList());

  getBooksApi()
    .then((newList) => {
      dispatch(getBookListFulfilled(newList));
    })
    .catch((err) => {
      dispatch(getBookListRejected(err));
    });
};

export const resetBookList = () => ({
  type: thunkReduxActions.resetBookList,
});
