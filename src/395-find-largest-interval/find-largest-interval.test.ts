import { describe, expect, test } from "vitest";
import { findLargestInterval } from "./find-largest-interval.js";

type TFindLargestInterval = {
  input: string[];
  output: number;
};

const TEST_CASES: TFindLargestInterval[] = [
  { input: ["A0", "C1", "G1", "C2"], output: 7 },
  { input: ["C4", "G4", "C5", "G3"], output: 17 },
  { input: ["E2", "C3", "G3", "C8"], output: 53 },
];

describe("findLargestInterval", () => {
  TEST_CASES.forEach((t, i) => {
    test(`should return ${t.output} when given ${JSON.stringify(t.input)}`, () => {
      expect(findLargestInterval(t.input)).toEqual(t.output);
    });
  });
});
