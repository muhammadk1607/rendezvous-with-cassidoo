import { describe, expect, test } from "vitest";
import { findLongestTimeGap } from "./find-longest-time-gap.js";

type TFindLongestTimeGapTestCase = {
  input: string[];
  output: number;
};

const TEST_CASES: TFindLongestTimeGapTestCase[] = [
  { input: ["00:00", "01:00", "02:00"], output: 60 },
  { input: ["12:00"], output: 0 },
  { input: ["08:00", "10:00", "10:00", "14:00"], output: 240 },
  { input: ["14:00", "09:00", "15:00", "10:30"], output: 360 },
];

describe("findLongestTimeGap", () => {
  TEST_CASES.forEach(t => {
    test(`should return ${t.output} when given ${JSON.stringify(t.input)}`, () => {
      expect(findLongestTimeGap(t.input)).toEqual(t.output);
    });
  });
});
