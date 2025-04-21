export type TIngredient = {
  name: string;
  amount: number;
};

export const calculateIngredients = (
  ingredients: TIngredient[],
  targetServings: number,
): TIngredient[] =>
  ingredients.map(ingredient => ({
    ...ingredient,
    amount: ingredient.amount * targetServings,
  }));
