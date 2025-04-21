import { describe, expect, test } from "vitest";
import { calculateIngredients, type TIngredient } from "./calculate-ingredients.js";

type TCalculateIngredientsTestCase = {
  input: {
    ingredients: TIngredient[];
    amount: number;
  };
  output: TIngredient[];
};

const TEST_CASES: TCalculateIngredientsTestCase[] = [
  {
    input: {
      ingredients: [
        { name: "flour", amount: 200 },
        { name: "sugar", amount: 100 },
        { name: "eggs", amount: 2 },
      ],
      amount: 3,
    },
    output: [
      {
        name: "flour",
        amount: 600,
      },
      {
        name: "sugar",
        amount: 300,
      },
      {
        name: "eggs",
        amount: 6,
      },
    ],
  },
];

describe("calculateIngredients", () => {
  TEST_CASES.forEach(t => {
    test(`should return ${t.output} when given ${JSON.stringify(t.input)}`, () => {
      expect(calculateIngredients(t.input.ingredients, t.input.amount)).toEqual(t.output);
    });
  });
});
