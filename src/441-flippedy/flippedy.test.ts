import { describe, expect, test } from "vitest";
import { flippedy } from "./flippedy.js";

type TFlippedy = {
  input: string;
  output: string;
};

const TEST_CASES: TFlippedy[] = [
  {
    input: "cat and mice",
    output: "cat dna mice",
  },
];

describe("flippedy", () => {
  TEST_CASES.forEach(t => {
    test(`should return ${JSON.stringify(t.output)} when given ${JSON.stringify(t.input)}`, () => {
      expect(flippedy(t.input)).toBe(t.output);
    });
  });
});
