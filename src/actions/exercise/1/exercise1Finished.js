import { counterSagaFinishedActions } from "../../../actionTypes";

export const incrementCounter = () => ({
  type: counterSagaFinishedActions.increment,
});

export const incrementCounterAsync = () => ({
  type: counterSagaFinishedActions.incrementAsync,
});

export const resetCounter = () => ({
  type: counterSagaFinishedActions.reset,
});
