import { describe, expect, test } from "vitest";
import { calculatePrice } from "./calculate-price.js";

type TCalculatePrice = {
  input: {
    closingDate: string;
    visitDate: string;
    price: number;
  };
  output: number;
};

const TEST_CASES: TCalculatePrice[] = [
  {
    input: {
      closingDate: "2025-04-01",
      visitDate: "2025-03-03",
      price: 100,
    },
    output: 65.61,
  },
  {
    input: {
      closingDate: "2025-04-01",
      visitDate: "2025-03-15",
      price: 50,
    },
    output: 40.5,
  },
  {
    input: {
      closingDate: "2025-04-01",
      visitDate: "2025-04-15",
      price: 75,
    },
    output: 75,
  },
];

describe("calculatePrice", () => {
  TEST_CASES.forEach((t, i) => {
    test(`should return ${t.output} when given ${JSON.stringify(t.input)}`, () => {
      expect(calculatePrice(t.input.closingDate, t.input.visitDate, t.input.price)).toEqual(
        t.output,
      );
    });
  });
});
