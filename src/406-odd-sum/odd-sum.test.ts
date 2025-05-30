import { describe, expect, test } from "vitest";
import { oddSum } from "./odd-sum.js";

type TOddSumTestCase = {
  input: [number[], number[]];
  output: number[][];
};

const TEST_CASES: TOddSumTestCase[] = [
  {
    input: [
      [9, 14, 6, 2, 11],
      [8, 4, 7, 20],
    ],
    output: [
      [9, 8],
      [9, 4],
      [9, 20],
      [14, 7],
      [6, 7],
      [2, 7],
      [11, 8],
      [11, 4],
      [11, 20],
    ],
  },
  {
    input: [
      [2, 4, 6, 8],
      [10, 12, 14],
    ],
    output: [],
  },
];

describe("drawCube", () => {
  TEST_CASES.forEach(t => {
    test(`should return ${JSON.stringify(t.output)} when given ${JSON.stringify(t.input)}`, () => {
      expect(oddSum(...t.input)).toEqual(t.output);
    });
  });
});
