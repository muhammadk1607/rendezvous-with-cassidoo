import { describe, expect, test } from "vitest";
import { permute } from "./permute.js";

type TPermuteTestCase = {
  input: string;
  output: string[];
};

const TEST_CASES: TPermuteTestCase[] = [
  {
    input: "abc",
    output: ["abc", "acb", "bac", "bca", "cab", "cba"],
  },
];

describe("permute", () => {
  TEST_CASES.forEach((t, i) => {
    test(`should return ${JSON.stringify(t.output)} when given ${t.input}`, () => {
      expect(permute(t.input)).toEqual(t.output);
    });
  });
});
