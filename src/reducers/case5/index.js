import { observableReduxActions } from "../../actionTypes";

const initialState = {
  isLoading: false,
  errorMessage: "",
  list: [],
};

const case5Reducer = (state = initialState, action) => {
  switch (action.type) {
    case observableReduxActions.getBookList:
      return {
        ...state,
        isLoading: true,
      };

    case observableReduxActions.getBookListRejected:
      const { err } = action.payload;

      return {
        ...state,
        isLoading: false,
        errorMessage: err,
      };

    case observableReduxActions.getBookListFulfilled:
      const { newList } = action.payload;

      return {
        ...state,
        isLoading: false,
        list: newList,
      };

    case observableReduxActions.cancelGetBookList:
      return {
        ...state,
        isLoading: false,
      };

    case observableReduxActions.resetBookList:
      return {
        ...initialState,
      };

    default:
      return state;
  }
};

export default case5Reducer;
