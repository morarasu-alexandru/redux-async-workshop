import { debounceActions } from "../../../actionTypes";

export const changeSize = (size) => ({
  type: debounceActions.changeSize,
  payload: { size },
});

export const savePaneSize = (size) => ({
  type: debounceActions.saveSize,
  payload: { size },
});

export const postSize = () => ({
  type: debounceActions.postSize,
});

export const postSizeFulfilled = () => ({
  type: debounceActions.postSizeFulfilled,
});

export const postSizeRejected = (err) => ({
  type: debounceActions.postSizeRejected,
  payload: { err },
});

export const getSize = () => ({
  type: debounceActions.getSize,
});

export const getSizeFulfilled = (size) => ({
  type: debounceActions.getSizeFulfilled,
  payload: { size },
});

export const getSizeRejected = (err) => ({
  type: debounceActions.getSizeRejected,
  payload: { err },
});
