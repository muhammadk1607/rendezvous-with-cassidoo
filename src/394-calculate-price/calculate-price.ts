export const calculatePrice = (closingDate: string, visitDate: string, price: number): number => {
  const closingDateTimestamp = new Date(closingDate).getTime();
  const visitDateTimestamp = new Date(visitDate).getTime();

  if (visitDateTimestamp > closingDateTimestamp) return price;

  const weeks = Math.floor(
    (closingDateTimestamp - visitDateTimestamp) / (1000 * 60 * 60 * 24 * 7),
  );

  for (let i = 0; i < weeks; i++) {
    price -= price * 0.1;
  }

  return price;
};
