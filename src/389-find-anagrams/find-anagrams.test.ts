import { describe, expect, test } from "vitest";
import { findAnagrams } from "./find-anagrams.js";

type TFindAnagrams = {
  input: {
    s: string;
    p: string;
  };
  output: number[];
};

const TEST_CASES: TFindAnagrams[] = [
  {
    input: {
      s: "cbaebabacd",
      p: "abc",
    },
    output: [0, 6],
  },
  {
    input: {
      s: "abab",
      p: "ab",
    },
    output: [0, 1, 2],
  },
  {
    input: {
      s: "fish",
      p: "cake",
    },
    output: [],
  },
];

describe("findAnagrams", () => {
  TEST_CASES.forEach((t, i) => {
    test(`should return ${JSON.stringify(t.output)} when given ${JSON.stringify(t.input)}`, () => {
      expect(findAnagrams(t.input.s, t.input.p)).toEqual(t.output);
    });
  });
});
