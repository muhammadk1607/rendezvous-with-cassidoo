export const nearestPerfectMonths = (year: number) => {
  const result = { prev: new Date(year, 0, 1), next: new Date(year + 1, 0, 1) };

  while (![4, 5].includes(result.prev.getDay())) {
    result.prev = new Date(result.prev.getFullYear() - 1, 0, 1);
  }
  while (![4, 5].includes(result.next.getDay())) {
    result.next = new Date(result.next.getFullYear() + 1, 0, 1);
  }

  return {
    prev: `${result.prev.getFullYear()}-02`,
    next: `${result.next.getFullYear()}-02`,
  };
};
