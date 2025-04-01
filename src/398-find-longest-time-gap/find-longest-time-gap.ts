const getMinutes = (time: string): number => {
  const [hours, minutes] = time.split(":").map(Number);

  if (hours === undefined || minutes === undefined)
    throw new Error(`Invalid time format: ${time}`);

  return hours * 60 + minutes;
};

export const findLongestTimeGap = (times: string[]): number => {
  let longestGap = 0;

  for (let i = 0; i < times.length - 1; i++) {
    const current = times[i] as string;
    const next = times[i + 1] as string;

    longestGap = Math.max(longestGap, getMinutes(next) - getMinutes(current));
  }

  return longestGap;
};
