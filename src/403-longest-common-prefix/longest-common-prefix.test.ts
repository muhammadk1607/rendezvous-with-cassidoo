import { describe, expect, test } from "vitest";
import { longestCommonPrefix } from "./longest-common-prefix.js";

type TLongestCommonPrefix = {
  input: string[];
  output: string;
};

const TEST_CASES: TLongestCommonPrefix[] = [
  {
    input: [],
    output: "",
  },
  {
    input: ["a", "b", "c"],
    output: "",
  },
  {
    input: ["flower", "flow", "flight"],
    output: "fl",
  },
  {
    input: ["dog", "racecar", "car"],
    output: "",
  },
  {
    input: ["interstellar", "internet", "internal", "interval"],
    output: "inter",
  },
];

describe("longestCommonPrefix", () => {
  TEST_CASES.forEach(t => {
    test(`should return ${t.output} when given ${JSON.stringify(t.input)}`, () => {
      expect(longestCommonPrefix(t.input)).toEqual(t.output);
    });
  });
});
