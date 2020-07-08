import { counterSagaFinishedActions } from "../../../actionTypes";

const initialState = {
  count: 1,
};

const exercise1FinishedReducer = (state = initialState, action) => {
  switch (action.type) {
    case counterSagaFinishedActions.increment:
      return {
        count: state.count + 1,
      };

    case counterSagaFinishedActions.reset:
      return {
        ...initialState,
      };
    default:
      return state;
  }
};

export default exercise1FinishedReducer;
