const ROMAN_MAP = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000,
} as const;

const romanToInt = (roman: string): number => {
  let total = 0;
  let prevValue = 0;

  for (let i = roman.length - 1; i >= 0; i--) {
    const currentValue = ROMAN_MAP[roman[i] as keyof typeof ROMAN_MAP];

    if (currentValue < prevValue) total -= currentValue;
    else total += currentValue;
    prevValue = currentValue;
  }

  return total;
};

export const sortMonarchs = (monarchs: string[]): string[] => {
  return monarchs.sort((a, b) => {
    const [nameA, ordinalA] = a.split(" ") as [string, string];
    const [nameB, ordinalB] = b.split(" ") as [string, string];

    const numberA = romanToInt(ordinalA);
    const numberB = romanToInt(ordinalB);

    // If years are the same, compare by name
    return nameA.localeCompare(nameB) || numberA - numberB;
  });
};
