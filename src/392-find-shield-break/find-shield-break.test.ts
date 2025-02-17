import { describe, expect, test } from "vitest";
import { findShieldBreak } from "./find-shield-break.js";

type TFindShieldBreakTest = {
  input: {
    attacks: number[];
    shield: number;
  };
  output: number;
};

const TEST_CASES: TFindShieldBreakTest[] = [
  {
    input: { attacks: [1, 2, 3, 4, 5], shield: 10 },
    output: 4,
  },
  {
    input: { attacks: [10, 20, 30, 40], shield: 50 },
    output: 2,
  },
  {
    input: { attacks: [1, 2, 3, 4], shield: 20 },
    output: -1,
  },
  {
    input: { attacks: [50], shield: 20 },
    output: 0,
  },
];

describe("findShieldBreak", () => {
  TEST_CASES.forEach((t, i) => {
    test(`should return ${t.output} when given ${JSON.stringify(t.input)}`, () => {
      expect(findShieldBreak(t.input.attacks, t.input.shield)).toEqual(t.output);
    });
  });
});
