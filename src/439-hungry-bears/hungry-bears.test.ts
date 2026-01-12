import { describe, expect, test } from "vitest";
import { hungryBears } from "./hungry-bears.js";

type THungryBearTestCase = {
  input: {
    name: string;
    hunger: number;
  }[];
  output: string[];
};

const TEST_CASES: THungryBearTestCase[] = [
  {
    input: [],
    output: [],
  },
  {
    input: [
      { name: "Baloo", hunger: 6 },
      { name: "Yogi", hunger: 9 },
      { name: "Paddington", hunger: 4 },
      { name: "Winnie", hunger: 10 },
      { name: "Chicago", hunger: 20 },
    ],
    output: ["Chicago", "Winnie"],
  },
];

describe("hungryBears", () => {
  TEST_CASES.forEach(t => {
    test(`should return ${JSON.stringify(t.output)} when given ${JSON.stringify(t.input)}`, () => {
      expect(hungryBears(t.input)).toEqual(t.output);
    });
  });
});
