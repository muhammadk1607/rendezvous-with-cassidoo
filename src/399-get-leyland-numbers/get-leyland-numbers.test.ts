import { describe, expect, test } from "vitest";
import { getLeylandNumbers } from "./get-leyland-numbers.js";

type TGetLeylandNumbersTestCase = {
  input: number;
  output: number[];
};

const TEST_CASES: TGetLeylandNumbersTestCase[] = [
  { input: 1, output: [8] },
  { input: 5, output: [8, 17, 32, 54, 57] },
  {
    input: 22,
    output: [
      8, 17, 32, 54, 57, 100, 145, 177, 320, 368, 512, 593, 945, 1124, 1649, 2169, 2530, 4240,
      5392, 6250, 7073, 8361,
    ],
  },
  {
    input: 41,
    output: [
      8, 17, 32, 54, 57, 100, 145, 177, 320, 368, 512, 593, 945, 1124, 1649, 2169, 2530, 4240,
      5392, 6250, 7073, 8361, 16580, 18785, 20412, 23401, 32993, 60049, 65792, 69632, 93312, 94932,
      131361, 178478, 262468, 268705, 397585, 423393, 524649, 533169, 1048976,
    ],
  },
];

describe("getLeylandNumbers", () => {
  TEST_CASES.forEach(t => {
    test(`should return ${JSON.stringify(t.output)} when given ${t.input}`, () => {
      expect(getLeylandNumbers(t.input)).toEqual(t.output);
    });
  });
});
