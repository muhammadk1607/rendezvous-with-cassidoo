import { describe, expect, test } from "vitest";
import { sortMonarchs } from "./sort-monarchs.js";

type TISValidTrafficSequenceTestCase = {
  input: string[];
  output: string[];
};

const TEST_CASES: TISValidTrafficSequenceTestCase[] = [
  {
    input: ["Louis IX", "Louis VIII", "Philip II", "Philip I"],
    output: ["Louis VIII", "Louis IX", "Philip I", "Philip II"],
  },
  {
    input: ["George VI", "George V", "Elizabeth II", "Edward VIII"],
    output: ["Edward VIII", "Elizabeth II", "George V", "George VI"],
  },
];

describe("sortMonarchs", () => {
  TEST_CASES.forEach(t => {
    test(`should return ${JSON.stringify(t.output)} when given ${JSON.stringify(t.input)}`, () => {
      expect(sortMonarchs(t.input)).toEqual(t.output);
    });
  });
});
