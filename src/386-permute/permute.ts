export const permute = (s: string) => {
  if (s.length === 0) return [""];

  const result: string[] = [];

  for (let i = 0; i < s.length; i++) {
    const rest = s.slice(0, i).concat(s.slice(i + 1));
    permute(rest).forEach(restPermutation => {
      result.push(s[i] + restPermutation);
    });
  }

  return result;
};
