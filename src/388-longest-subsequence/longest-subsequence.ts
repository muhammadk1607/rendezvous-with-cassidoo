export const longestSubsequence = (sequence: number[]): number => {
  let longest = -Infinity;
  let current = 1;
  let prev = sequence[0];

  if (prev === undefined) return 0;

  for (const num of sequence.slice(1)) {
    if (Math.abs(num - prev) === 1) current++;
    else {
      longest = Math.max(longest, current);
      current = 1;
    }
    prev = num;
  }

  return Math.max(longest, current);
};
