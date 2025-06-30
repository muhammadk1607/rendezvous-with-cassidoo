import { describe, expect, test } from "vitest";
import { nonRepeat } from "./non-repeat.js";

type TNonRepeatTestCase = {
  input: string;
  output: string;
};

const TEST_CASES: TNonRepeatTestCase[] = [
  {
    input: "candy canes do taste yummy",
    output: "u",
  },
];

describe("nonRepeat", () => {
  TEST_CASES.forEach(t => {
    test(`should return ${JSON.stringify(t.output)} when given ${JSON.stringify(t.input)}`, () => {
      expect(nonRepeat(t.input)).toEqual(t.output);
    });
  });
});
