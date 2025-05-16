export const addOperators = (origin: number, target: number): string[] => {
  const digits = origin.toString().split("");
  const result: string[] = [];

  const dfs = (index: number, path: string, currentNumber: number) => {
    if (index === digits.length) {
      if (currentNumber === target) result.push(path);
      return;
    }

    for (let i = index; i < digits.length; i++) {
      const digit = digits[i];
      const newNumber = Number(digit);

      dfs(i + 1, `${path}+${digit}`, currentNumber + newNumber);
      dfs(i + 1, `${path}-${digit}`, currentNumber - newNumber);

      // Multiply but only if BODMAS is not violated
      if (!(path.includes("+") || path.includes("-")))
        dfs(i + 1, `${path}*${digit}`, currentNumber * newNumber);
    }
  };

  // Start DFS from the first digit
  const firstDigit = digits[0] as string;
  const firstNumber = Number(firstDigit);
  dfs(1, firstDigit, firstNumber);

  return result;
};
