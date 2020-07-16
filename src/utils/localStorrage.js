export const saveSize = (size) => {
  localStorage.setItem("size", size);
};

export const getSize = () => {
  return localStorage.getItem("size");
};

export const saveSizeFinished = (size) => {
  localStorage.setItem("sizeFinished", size);
};

export const getSizeFinished = () => {
  return localStorage.getItem("sizeFinished");
};
