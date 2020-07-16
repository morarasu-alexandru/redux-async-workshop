import { debounceFinishedActions } from "../../../actionTypes";

const initialState = {
  size: 50,
  isLoading: false,
  error: "",
};

const exercise3FinishedReducer = (state = initialState, action) => {
  switch (action.type) {
    case debounceFinishedActions.saveSize: {
      const { size } = action.payload;

      return {
        ...state,
        size: size,
      };
    }

    case debounceFinishedActions.postSize: {
      return {
        ...state,
        isLoading: true,
      };
    }

    case debounceFinishedActions.postSizeFulfilled: {
      return {
        ...state,
        isLoading: false,
      };
    }

    case debounceFinishedActions.postSizeRejected: {
      const { err } = action.payload;

      return {
        ...state,
        isLoading: false,
        error: err,
      };
    }

    case debounceFinishedActions.getSize: {
      return {
        ...state,
        isLoading: true,
      };
    }

    case debounceFinishedActions.getSizeFulfilled: {
      const { size } = action.payload;

      return {
        ...state,
        isLoading: false,
        size: size,
      };
    }

    case debounceFinishedActions.getSizeRejected: {
      const { err } = action.payload;

      return {
        ...state,
        isLoading: false,
        error: err,
      };
    }

    default:
      return state;
  }
};

export default exercise3FinishedReducer;
