export type TPosition = "QB" | "RB" | "WR" | "TE" | "OL" | "DL" | "LB" | "DB" | "K" | "LS";
type TRange = {
  min: number;
  max: number;
};

const ranges: Record<TPosition, TRange[]> = {
  QB: [{ min: 1, max: 19 }],
  RB: [
    { min: 1, max: 49 },
    { min: 80, max: 89 },
  ],
  WR: [
    { min: 1, max: 49 },
    { min: 80, max: 89 },
  ],
  TE: [
    { min: 1, max: 49 },
    { min: 80, max: 89 },
  ],
  OL: [{ min: 50, max: 79 }],
  DL: [
    { min: 50, max: 79 },
    { min: 90, max: 99 },
  ],
  LB: [
    { min: 1, max: 59 },
    { min: 90, max: 99 },
  ],
  DB: [{ min: 1, max: 49 }],
  K: [
    { min: 1, max: 49 },
    { min: 90, max: 99 },
  ],
  LS: [{ min: 1, max: 99 }],
};

export const availableNumbers = (position: TPosition, numbers: number[]): number[] => {
  const validRanges = ranges[position];
  let availableNumbers: number[] = [];

  for (const range of validRanges) {
    for (let i = range.min; i <= range.max; i++) {
      if (!numbers.includes(i)) {
        availableNumbers.push(i);
      }
    }
  }

  return availableNumbers;
};
