import { simpleSagaExerciseActions } from "../../../actionTypes";

const initialState = {
  isLoading: false,
  errorMessage: "",
  list: [],
};

const exercise1Reducer = (state = initialState, action) => {
  switch (action.type) {
    case simpleSagaExerciseActions.getBookList:
      return {
        ...state,
        isLoading: true,
      };

    case simpleSagaExerciseActions.getBookListRejected:
      const { err } = action.payload;

      return {
        ...state,
        isLoading: false,
        errorMessage: err,
      };

    case simpleSagaExerciseActions.getBookListFulfilled:
      const { newList } = action.payload;

      return {
        ...state,
        isLoading: false,
        list: newList,
      };

    case simpleSagaExerciseActions.resetBookList:
      return {
        ...initialState,
      };

    case simpleSagaExerciseActions.cancelGetBookList:
      return {
        ...state,
        isLoading: false,
        errorMessage: "",
      };

    default:
      return state;
  }
};

export default exercise1Reducer;
