import { describe, expect, test } from "vitest";
import { sumOfNeighbors } from "./sum-of-neighbors.js";

type TSumOfNeighborsTestCase = {
  input: number[];
  output: number;
};

const TEST_CASES: TSumOfNeighborsTestCase[] = [
  {
    input: [],
    output: 0,
  },
  {
    input: [1],
    output: 1,
  },
  {
    input: [1, 4],
    output: 10,
  },
  {
    input: [1, 4, 7],
    output: 28,
  },
];

describe("sumOfNeighbors", () => {
  TEST_CASES.forEach(t => {
    test(`should return ${JSON.stringify(t.output)} when given ${JSON.stringify(t.input)}`, () => {
      expect(sumOfNeighbors(t.input)).toEqual(t.output);
    });
  });
});
