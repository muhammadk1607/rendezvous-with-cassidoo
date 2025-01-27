const getAnagrams = (s: string): string[] => {
  const anagrams: string[] = [];

  const generateAnagrams = (str: string, anagram: string) => {
    if (str.length === 0) {
      anagrams.push(anagram);
      return;
    }

    for (let i = 0; i < str.length; i++) {
      generateAnagrams(str.slice(0, i) + str.slice(i + 1), anagram + str[i]);
    }
  };

  generateAnagrams(s, "");

  return anagrams;
};

export const findAnagrams = (s: string, p: string): number[] => {
  const result: number[] = [];

  if (s.length < p.length) return result;

  const pAnagrams = getAnagrams(p);

  for (let i = 0; i < s.length - p.length + 1; i++) {
    const subStr = s.slice(i, i + p.length);
    if (pAnagrams.includes(subStr)) {
      result.push(i);
    }
  }

  return result;
};
