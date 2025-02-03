import { describe, expect, test } from "vitest";
import { evaluatePostfix } from "./evaluate-postfix.js";

type TEvaluatePostfix = {
  input: string;
  output: number;
};

const TEST_CASES: TEvaluatePostfix[] = [
  {
    input: "23+",
    output: 5,
  },
  {
    input: "12+",
    output: 3,
  },
  {
    input: "56+7*",
    output: 77,
  },
];

describe("evaluatePostfix", () => {
  TEST_CASES.forEach((t, i) => {
    test(`should return ${t.output} when given ${t.input}`, () => {
      expect(evaluatePostfix(t.input)).toEqual(t.output);
    });
  });
});
