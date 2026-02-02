import { describe, expect, test } from "vitest";
import { nearestPerfectMonths } from "./nearest-perfect-month.js";

type TNearestPerfectMonth = {
  input: number;
  output: {
    prev: string;
    next: string;
  };
};

const TEST_CASES: TNearestPerfectMonth[] = [
  {
    input: 2025,
    output: {
      prev: "2021-02",
      next: "2026-02",
    },
  },
  {
    input: 2026,
    output: {
      prev: "2026-02",
      next: "2027-02",
    },
  },
];

describe("nearestPerfectMonths", () => {
  TEST_CASES.forEach(t => {
    test(`should return ${JSON.stringify(t.output)} when given ${JSON.stringify(t.input)}`, () => {
      expect(nearestPerfectMonths(t.input)).toStrictEqual(t.output);
    });
  });
});
