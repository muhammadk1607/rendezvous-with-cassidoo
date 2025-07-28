export const canFormHexagon = (sides: number[]): boolean => {
  if (sides.length !== 6) return false;

  const sideCount: Record<number, number> = {};
  for (const side of sides) {
    sideCount[side] = (sideCount[side] || 0) + 1;
  }

  return Object.values(sideCount).filter(count => count >= 2).length === 3;
};
