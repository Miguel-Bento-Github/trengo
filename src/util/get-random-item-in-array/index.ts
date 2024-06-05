export const getRandomItemInArray = <T>(array: T[]) => {
  if (!array.length) {
    throw new Error("Cannot get item, Array is empty.");
  }
  return array[Math.floor(Math.random() * array.length)];
};
