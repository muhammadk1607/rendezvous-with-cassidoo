export const compress = (characters: string[]): string[] => {
  const compressed: string[] = [];

  let currentChar = characters[0] as string;
  let count = 1;

  for (let i = 1; i <= characters.length; i++) {
    if (characters[i] === currentChar) {
      count++;
    } else {
      compressed.push(currentChar);
      if (count > 1) {
        compressed.push(count.toString());
      }
      currentChar = characters[i] as string;
      count = 1;
    }
  }

  return compressed;
};
