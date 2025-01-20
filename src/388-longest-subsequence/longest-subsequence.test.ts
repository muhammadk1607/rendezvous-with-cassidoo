import { describe, expect, test } from "vitest";
import { longestSubsequence } from "./longest-subsequence.js";

type TLongestSubsequenceTestCase = {
  input: number[];
  output: number;
};

const TEST_CASES: TLongestSubsequenceTestCase[] = [
  {
    input: [1, 2, 3, 4],
    output: 4,
  },
  {
    input: [4, 2, 3, 1, 5],
    output: 2,
  },
  {
    input: [10, 11, 7, 8, 9, 12],
    output: 3,
  },
];

describe("longestSubsequence", () => {
  TEST_CASES.forEach((t, i) => {
    test(`should return ${t.output} when given ${JSON.stringify(t.input)}`, () => {
      expect(longestSubsequence(t.input)).toEqual(t.output);
    });
  });
});
