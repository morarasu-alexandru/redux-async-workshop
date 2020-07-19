import { debounceActions } from "../../../actionTypes";

const initialState = {
  size: null,
  isLoading: false,
  error: "",
};

const exercise3Reducer = (state = initialState, action) => {
  switch (action.type) {
    case debounceActions.saveSize: {
      const { size } = action.payload;

      return {
        ...state,
        size: size,
      };
    }

    case debounceActions.postSizeFulfilled: {
      return {
        ...state,
        isLoading: false,
      };
    }

    case debounceActions.postSizeRejected: {
      const { err } = action.payload;

      return {
        ...state,
        isLoading: false,
        error: err,
      };
    }

    case debounceActions.getSize: {
      return {
        ...state,
        isLoading: true,
      };
    }

    case debounceActions.getSizeFulfilled: {
      const { size } = action.payload;

      console.log("size: ", size);

      return {
        ...state,
        isLoading: false,
        size: size,
      };
    }

    case debounceActions.getSizeRejected: {
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

export default exercise3Reducer;
