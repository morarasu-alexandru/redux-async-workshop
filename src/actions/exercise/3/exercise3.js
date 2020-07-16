import { debounceFinished } from "../../../actionTypes";

export const paneResize = (size) => ({
  type: debounceFinished.changeSize,
  payload: { size },
});

export const savePaneSize = (size) => ({
  type: debounceFinished.saveSize,
  payload: { size },
});

export const postSize = () => ({
  type: debounceFinished.postSize,
});

export const postSizeFulfilled = () => ({
  type: debounceFinished.postSizeFulfilled,
});

export const postSizeRejected = (err) => ({
  type: debounceFinished.postSizeRejected,
  payload: { err },
});

export const getSize = () => ({
  type: debounceFinished.getSize,
});

export const getSizeFulfilled = (size) => ({
  type: debounceFinished.getSizeFulfilled,
  payload: { size },
});

export const getSizeRejected = (err) => ({
  type: debounceFinished.getSizeRejected,
  payload: { err },
});
