export const getRandomNum = (min: number, max: number): string => {
  const num = Math.random() * (max - min) + min;
  return num.toFixed(1);
};
