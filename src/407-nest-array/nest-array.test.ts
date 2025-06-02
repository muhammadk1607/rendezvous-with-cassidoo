import { describe, expect, test } from "vitest";
import { nestArray } from "./nest-array.js";

const a = [1, [2, [3, [4]]]];

type TNestArrayTestCase = {
  input: number[];
  output: any[];
};

const TEST_CASES: TNestArrayTestCase[] = [
  {
    input: [],
    output: [],
  },
  {
    input: [1],
    output: [1],
  },
  {
    input: [1, 2, 3, 4],
    output: [1, [2, [3, [4]]]],
  },
];

describe("nestArray", () => {
  TEST_CASES.forEach(t => {
    test(`should return ${JSON.stringify(t.output)} when given ${JSON.stringify(t.input)}`, () => {
      expect(nestArray(t.input)).toEqual(t.output);
    });
  });
});
