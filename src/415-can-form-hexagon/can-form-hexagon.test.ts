import { describe, expect, test } from "vitest";
import { canFormHexagon } from "./can-form-hexagon.js";

type TCanFormHexagonTestCase = {
  input: number[];
  output: boolean;
};

const TEST_CASES: TCanFormHexagonTestCase[] = [
  {
    input: [2, 3, 8, 8, 2, 3],
    output: true,
  },
  {
    input: [2, 3, 8, 8, 8, 3],
    output: false,
  },
  {
    input: [1, 2, 3, 4, 5, 6],
    output: false,
  },
  {
    input: [2, 2, 2, 2, 2, 2, 2],
    output: false,
  },
];

describe("canFormHexagon", () => {
  TEST_CASES.forEach(t => {
    test(`should return ${JSON.stringify(t.output)} when given ${JSON.stringify(t.input)}`, () => {
      expect(canFormHexagon(t.input)).toEqual(t.output);
    });
  });
});
