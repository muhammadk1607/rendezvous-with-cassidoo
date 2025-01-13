import { describe, expect, test } from "vitest";
import { natoify } from "./natoify.js";

type TNatoifyTestCase = {
  input: string;
  output: string;
};

const TEST_CASES: TNatoifyTestCase[] = [
  {
    input: "hello world",
    output: "Hotel Echo Lima Lima Oscar (space) Whiskey Oscar Romeo Lima Delta",
  },
  {
    input: "3spooky5me",
    output: "Three Sierra Papa Oscar Oscar Kilo Yankee Five Mike Echo",
  },
];

describe("natoify", () => {
  TEST_CASES.forEach((t, i) => {
    test(`should return ${t.output} when given ${t.input}`, () => {
      expect(natoify(t.input)).toEqual(t.output);
    });
  });
});
