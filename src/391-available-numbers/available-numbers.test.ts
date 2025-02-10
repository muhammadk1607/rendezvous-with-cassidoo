import { describe, expect, test } from "vitest";
import { availableNumbers, type TPosition } from "./available-numbers.js";

type TAvailableNumbers = {
  input: {
    position: TPosition;
    numbers: number[];
  };
  output: number[];
};

const TEST_CASES: TAvailableNumbers[] = [
  {
    input: { position: "QB", numbers: [1, 2, 3, 10, 19] },
    output: [4, 5, 6, 7, 8, 9, 11, 12, 13, 14, 15, 16, 17, 18],
  },
];

describe("availableNumbers", () => {
  TEST_CASES.forEach((t, i) => {
    test(`should return ${JSON.stringify(t.output)} when given ${JSON.stringify(t.input)}`, () => {
      expect(availableNumbers(t.input.position, t.input.numbers)).toEqual(t.output);
    });
  });
});
