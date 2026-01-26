const countVowels = (word: string) => word.match(/[aeiou]/gi)?.length || 0;

export const flippedy = (str: string) => {
  const words = str.split(" ");

  const firstWord = words[0];

  if (!firstWord) return str;

  const vowelCount = countVowels(firstWord);

  return words.reduce((acc, word) => {
    if (countVowels(word) === vowelCount) {
      return acc + " " + word.split("").reverse().join("");
    }

    return acc + " " + word;
  });
};
