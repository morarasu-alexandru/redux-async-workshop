import { simpleSagaExerciseFinishedActions } from "../../../actionTypes";

export const getBookList = () => ({
  type: simpleSagaExerciseFinishedActions.getBookList,
});

export const getBookListRejected = (err) => ({
  type: simpleSagaExerciseFinishedActions.getBookListRejected,
  payload: { err },
});

export const getBookListFulfilled = (newList) => {
  return {
    type: simpleSagaExerciseFinishedActions.getBookListFulfilled,
    payload: { newList },
  };
};

export const resetBookList = () => ({
  type: simpleSagaExerciseFinishedActions.resetBookList,
});

export const cancelGetBookList = () => ({
  type: simpleSagaExerciseFinishedActions.cancelGetBookList,
});
