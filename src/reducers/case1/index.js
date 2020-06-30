import { pureReduxActions } from "../../actionTypes";

const initialState = {
  isLoading: false,
  errorMessage: "",
  list: [],
};

const case1FinishedReducer = (state = initialState, action) => {
  switch (action.type) {
    case pureReduxActions.getBookList:
      return {
        ...state,
        isLoading: true,
      };

    case pureReduxActions.getBookListRejected:
      const { err } = action.payload;

      return {
        ...state,
        isLoading: false,
        errorMessage: err,
      };

    case pureReduxActions.getBookListFulfilled:
      const { newList } = action.payload;

      return {
        ...state,
        isLoading: false,
        list: newList,
      };

    case pureReduxActions.resetBookList:
      return {
        ...initialState,
      };

    default:
      return state;
  }
};

export default case1FinishedReducer;
