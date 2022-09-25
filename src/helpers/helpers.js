const getRandomNumber = (max) => Math.floor(Math.random() * max);

export const getRandomColor = () => {
  return `rgb(${getRandomNumber(255)},${getRandomNumber(255)},${getRandomNumber(
    255
  )})`;
};
