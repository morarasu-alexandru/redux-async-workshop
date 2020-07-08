import { counterSagaActions } from "../../../actionTypes";

export const incrementCounter = () => ({
  type: counterSagaActions.increment,
});

export const incrementCounterAsync = () => ({
  type: counterSagaActions.incrementAsync,
});

export const resetCounter = () => ({
  type: counterSagaActions.reset,
});
