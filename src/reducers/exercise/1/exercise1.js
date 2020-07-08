import { counterSagaActions } from "../../../actionTypes";

const initialState = {
  count: 1,
};

const exercise1Reducer = (state = initialState, action) => {
  switch (action.type) {
    case counterSagaActions.increment:
      return {
        count: state.count + 1,
      };

    case counterSagaActions.reset:
      return {
        ...initialState,
      };
    default:
      return state;
  }
};

export default exercise1Reducer;
