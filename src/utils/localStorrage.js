export const saveSize = (size) => {
  localStorage.setItem("size", size);
};

export const getSize = () => {
  const size = localStorage.getItem("size");
  if (size === null) return 50;
  return size;
};

export const saveSizeFinished = (size) => {
  localStorage.setItem("sizeFinished", size);
};

export const getSizeFinished = () => {
  const size = localStorage.getItem("sizeFinished");

  if (size === null) return 50;

  return size;
};
