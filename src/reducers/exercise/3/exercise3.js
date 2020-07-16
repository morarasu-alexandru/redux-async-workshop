import { debounceFinished } from "../../../actionTypes";

const initialState = {
  size: null,
  isLoading: false,
  error: "",
};

const exercise3Reducer = (state = initialState, action) => {
  switch (action.type) {
    case debounceFinished.saveSize: {
      const { size } = action.payload;

      return {
        ...state,
        size: size,
      };
    }

    case debounceFinished.postSizeFulfilled: {
      return {
        ...state,
        isLoading: false,
      };
    }

    case debounceFinished.postSizeRejected: {
      const { err } = action.payload;

      return {
        ...state,
        isLoading: false,
        error: err,
      };
    }

    case debounceFinished.getSize: {
      return {
        ...state,
        isLoading: true,
      };
    }

    case debounceFinished.getSizeFulfilled: {
      const { size } = action.payload;

      console.log("size: ", size);

      return {
        ...state,
        isLoading: false,
        size: size,
      };
    }

    case debounceFinished.getSizeRejected: {
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
