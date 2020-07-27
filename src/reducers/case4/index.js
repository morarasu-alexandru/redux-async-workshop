import { simpleSagaActions } from "../../actionTypes";

const initialState = {
  isLoading: false,
  errorMessage: "",
  list: [],
};

const case4Reducer = (state = initialState, action) => {
  switch (action.type) {
    case simpleSagaActions.getBookList:
      return {
        ...state,
        isLoading: true,
      };

    case simpleSagaActions.getBookListRejected:
      const { err } = action.payload;

      return {
        ...state,
        isLoading: false,
        errorMessage: err,
      };

    case simpleSagaActions.getBookListFulfilled:
      const { newList } = action.payload;

      return {
        ...state,
        isLoading: false,
        list: newList,
      };

    case simpleSagaActions.resetBookList:
      return {
        ...initialState,
      };

    default:
      return state;
  }
};

export default case4Reducer;
