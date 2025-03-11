const SEMITONES = {
  C: 0,
  D: 2,
  E: 4,
  F: 5,
  G: 7,
  A: 9,
  B: 11,
};

export const findLargestInterval = (keys: string[]): number => {
  const intervals = keys.map(key => {
    const note = key[0] as keyof typeof SEMITONES;
    const octave = Number(key[1]);
    return SEMITONES[note] + octave * 12;
  });

  let largestInterval = 0;

  for (let i = 0; i < intervals.length - 1; i++) {
    const current = intervals[i] as number;
    const next = intervals[i + 1] as number;

    largestInterval = Math.max(largestInterval, Math.abs(current - next));
  }

  return largestInterval;
};
