import { thunkReduxActions } from "../../actionTypes";

const initialState = {
  isLoading: false,
  errorMessage: "",
  list: [],
};

const case2Reducer = (state = initialState, action) => {
  switch (action.type) {
    case thunkReduxActions.getBookList:
      return {
        ...state,
        isLoading: true,
      };

    case thunkReduxActions.getBookListRejected:
      const { err } = action.payload;

      return {
        ...state,
        isLoading: false,
        errorMessage: err,
      };

    case thunkReduxActions.getBookListFulfilled:
      const { newList } = action.payload;

      return {
        ...state,
        isLoading: false,
        list: newList,
      };

    case thunkReduxActions.resetBookList:
      return {
        ...initialState,
      };

    default:
      return state;
  }
};

export default case2Reducer;
