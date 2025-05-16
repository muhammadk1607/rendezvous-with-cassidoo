import { describe, expect, test } from "vitest";
import { addOperators } from "./add-operators.js";

type TAddOperatorsTestCase = {
  input: { origin: number; target: number };
  output: string[];
};

const TEST_CASES: TAddOperatorsTestCase[] = [
  {
    input: { origin: 123, target: 6 },
    output: ["1+2+3", "1*2*3"],
  },
  {
    input: { origin: 3456237490, target: 9191 },
    output: [],
  },
];

describe("addOperators", () => {
  TEST_CASES.forEach(t => {
    test(`should return ${JSON.stringify(t.output)} when given ${JSON.stringify(t.input)}`, () => {
      expect(addOperators(t.input.origin, t.input.target)).toEqual(t.output);
    });
  });
});
