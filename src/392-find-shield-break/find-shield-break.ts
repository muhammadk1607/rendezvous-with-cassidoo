export const findShieldBreak = (attacks: number[], shield: number): number => {
  for (let i = 0; i < attacks.length; i++) {
    shield -= attacks[i] as number;
    if (shield < 0) return i;
  }

  return -1;
};
