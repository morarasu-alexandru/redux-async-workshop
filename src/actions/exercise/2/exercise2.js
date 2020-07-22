import { simpleSagaExerciseActions } from "../../../actionTypes";

export const startGetBookList = () => ({
  type: simpleSagaExerciseActions.startGetBookList,
});

export const getBookList = () => ({
  type: simpleSagaExerciseActions.getBookList,
});

export const getBookListRejected = (err) => ({
  type: simpleSagaExerciseActions.getBookListRejected,
  payload: { err },
});

export const getBookListFulfilled = (newList) => {
  return {
    type: simpleSagaExerciseActions.getBookListFulfilled,
    payload: { newList },
  };
};

export const resetBookList = () => ({
  type: simpleSagaExerciseActions.resetBookList,
});

export const cancelGetBookList = () => ({
  type: simpleSagaExerciseActions.cancelGetBookList,
});
