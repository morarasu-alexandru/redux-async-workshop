import { debounceFinishedActions } from "../../../actionTypes";

export const changeSize = (size) => ({
  type: debounceFinishedActions.changeSize,
  payload: { size },
});

export const savePaneSize = (size) => ({
  type: debounceFinishedActions.saveSize,
  payload: { size },
});

export const postSize = () => ({
  type: debounceFinishedActions.postSize,
});

export const postSizeFulfilled = () => ({
  type: debounceFinishedActions.postSizeFulfilled,
});

export const postSizeRejected = (err) => ({
  type: debounceFinishedActions.postSizeRejected,
  payload: { err },
});

export const getSize = () => ({
  type: debounceFinishedActions.getSize,
});

export const getSizeFulfilled = (size) => ({
  type: debounceFinishedActions.getSizeFulfilled,
  payload: { size },
});

export const getSizeRejected = (err) => ({
  type: debounceFinishedActions.getSizeRejected,
  payload: { err },
});
