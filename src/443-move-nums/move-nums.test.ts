import { describe, expect, test } from "vitest";
import { moveNums } from "./move-nums.js";

type TMoveNums = {
  input: {
    num: number;
    arr: number[];
  };
  output: number[];
};

const TEST_CASES: TMoveNums[] = [
  {
    input: {
      num: 0,
      arr: [0, 2, 0, 3, 10],
    },
    output: [2, 3, 10, 0, 0],
  },
];

describe("moveNums", () => {
  TEST_CASES.forEach(t => {
    test(`should return ${JSON.stringify(t.output)} when given ${JSON.stringify(t.input)}`, () => {
      expect(moveNums(t.input.arr, t.input.num)).toStrictEqual(t.output);
    });
  });
});
