export const nonRepeat = (str: string): string => {
  const charCount: Record<string, number> = {};

  for (const char of str) {
    charCount[char] = (charCount[char] || 0) + 1;
  }

  for (let i = str.length - 1; i >= 0; i--) {
    const char = str[i] || "";
    if (charCount[char] === 1) return char;
  }

  return "";
};
