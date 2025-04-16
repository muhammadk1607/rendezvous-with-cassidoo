import { describe, expect, test } from "vitest";
import { largestPathSum } from "./largest-path-sum.js";

type TLargestPathSumTestCase = {
  input: number[][];
  output: number;
};

const TEST_CASES: TLargestPathSumTestCase[] = [
  {
    input: [
      [1, 2],
      [3, 4],
    ],
    output: 10,
  },
  {
    input: [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9],
    ],
    output: 45,
  },
  {
    input: [
      [5, 3],
      [2, 8],
    ],
    output: 18,
  },
];

describe("largestPathSum", () => {
  TEST_CASES.forEach(t => {
    test(`should return ${t.output} when given ${JSON.stringify(t.input)}`, () => {
      expect(largestPathSum(t.input)).toEqual(t.output);
    });
  });
});
