import { describe, expect, test } from "vitest";
import { compress } from "./compress.js";

type TCompressTestCase = {
  input: string[];
  output: string[];
};

const TEST_CASES: TCompressTestCase[] = [
  {
    input: ["a", "b", "c"],
    output: ["a", "b", "c"],
  },
  {
    input: ["a", "b", "b", "b", "c"],
    output: ["a", "b", "3", "c"],
  },
  {
    input: ["a", "a", "b", "b", "c", "c", "c"],
    output: ["a", "2", "b", "2", "c", "3"],
  },
];

describe("compress", () => {
  TEST_CASES.forEach(t => {
    test(`should return ${t.output} when given ${JSON.stringify(t.input)}`, () => {
      expect(compress(t.input)).toEqual(t.output);
    });
  });
});
