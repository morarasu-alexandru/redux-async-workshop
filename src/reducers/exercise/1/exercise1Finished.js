import { simpleSagaExerciseFinishedActions } from "../../../actionTypes";

const initialState = {
  isLoading: false,
  errorMessage: "",
  list: [],
};

const exercise1FinishedReducer = (state = initialState, action) => {
  switch (action.type) {
    case simpleSagaExerciseFinishedActions.getBookList:
      return {
        ...state,
        isLoading: true,
      };

    case simpleSagaExerciseFinishedActions.getBookListRejected:
      const { err } = action.payload;

      return {
        ...state,
        isLoading: false,
        errorMessage: err,
      };

    case simpleSagaExerciseFinishedActions.getBookListFulfilled:
      const { newList } = action.payload;

      return {
        ...state,
        isLoading: false,
        list: newList,
      };

    case simpleSagaExerciseFinishedActions.resetBookList:
      return {
        ...initialState,
      };

    case simpleSagaExerciseFinishedActions.cancelGetBookList:
      return {
        ...state,
        isLoading: false,
        errorMessage: "",
      };

    default:
      return state;
  }
};

export default exercise1FinishedReducer;
