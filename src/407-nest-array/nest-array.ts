export const nestArray = (array: any[]): any[] => {
  const result: any[] = [];
  let current = result;

  for (let i = 0; i < array.length; i++) {
    current.push(array[i]);

    if (i === array.length - 1) break;

    const nextLevel: any[] = [];
    current.push(nextLevel);
    current = nextLevel;
  }

  return result;
};
