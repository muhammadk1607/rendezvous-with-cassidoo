import { describe, expect, test } from "vitest";
import type { TrafficLight } from "./is-valid-traffic-sequence.js";
import { isValidTrafficSequence } from "./is-valid-traffic-sequence.js";

type TISValidTrafficSequenceTestCase = {
  input: TrafficLight[];
  output: boolean;
};

const TEST_CASES: TISValidTrafficSequenceTestCase[] = [
  {
    input: ["red", "green", "yellow", "red", "green"],
    output: true,
  },
  {
    input: ["red", "green", "red"],
    output: false,
  },
  {
    input: [],
    output: true,
  },
];

describe("isValidTrafficSequence", () => {
  TEST_CASES.forEach(t => {
    test(`should return ${JSON.stringify(t.output)} when given ${JSON.stringify(t.input)}`, () => {
      expect(isValidTrafficSequence(t.input)).toEqual(t.output);
    });
  });
});
