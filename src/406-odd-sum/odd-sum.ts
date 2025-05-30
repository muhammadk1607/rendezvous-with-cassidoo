export const oddSum = (first: number[], second: number[]): number[][] => {
  const result: number[][] = [];

  first.forEach(x => {
    second.forEach(y => {
      if ((x + y) % 2 !== 0) {
        result.push([x, y]);
      }
    });
  });

  return result;
};
