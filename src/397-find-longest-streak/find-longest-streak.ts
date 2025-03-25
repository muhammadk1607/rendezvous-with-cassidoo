export const findLongestStreak = (values: boolean[]) => {
  let max = 0;

  for (let i = 0; i < values.length; i++) {
    let current = 0;
    while (values[i]) {
      current++;
      i++;
    }

    if (current > max) {
      max = current;
    }
  }

  return max;
}
