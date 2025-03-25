import { describe, expect, test } from "vitest";
import { findLongestStreak } from "./find-longest-streak.js";
type TFindLongestStreakTestCase = {
  input: boolean[];
  output: number;
};

const TEST_CASES: TFindLongestStreakTestCase[] = [
  { input: [true, true, false, true, true, true], output: 3 },
  { input: [true, true, true, false, true], output: 3 },
  { input: [true, true, true, true], output: 4 },
];

describe("findLongestStreak", () => {
  TEST_CASES.forEach(t => {
    test(`should return ${t.output} when given ${JSON.stringify(t.input)}`, () => {
      expect(findLongestStreak(t.input)).toEqual(t.output);
    });
  });
});
