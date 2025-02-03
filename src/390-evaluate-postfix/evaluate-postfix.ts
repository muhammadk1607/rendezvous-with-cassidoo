type Operator = "+" | "-" | "*" | "/";

const isOperator = (char: string): char is Operator => {
  return char === "+" || char === "-" || char === "*" || char === "/";
};

const operate = (operand1: number, operand2: number, operator: Operator): number => {
  if (operator === "/") {
    return Math.floor(operand1 / operand2);
  } else if (operator === "*") {
    return operand1 * operand2;
  } else if (operator === "+") {
    return operand1 + operand2;
  } else {
    return operand1 - operand2;
  }
};

export const evaluatePostfix = (expression: string): number => {
  const stack: number[] = [];

  for (let i = 0; i < expression.length; i++) {
    const char = expression[i] as string;

    if (isOperator(char)) {
      const operand2 = stack.pop();
      const operand1 = stack.pop();

      if (operand1 === undefined || operand2 === undefined) {
        throw new Error("Invalid expression");
      }

      const result = operate(operand1, operand2, char);
      stack.push(result);
    } else {
      stack.push(Number(char));
    }
  }

  return stack.pop() || 0;
};
