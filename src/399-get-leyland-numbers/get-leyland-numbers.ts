export const getLeylandNumbers = (n: number): number[] => {
  let count = n;
  let leylandNumbers: number[] = [];

  let x = 2;

  while (count > 0) {
    for (let i = 2; i <= x; i++) {
      leylandNumbers.push(Math.pow(i, x) + Math.pow(x, i));
    }
    x++;
    count--;
  }

  return leylandNumbers.toSorted((a, b) => a - b).slice(0, n);
};
