export type TrafficLight = "red" | "green" | "yellow";
export const isValidTrafficSequence = (sequence: TrafficLight[]): boolean => {
  let prevLight: TrafficLight | null = null;

  for (let i = 0; i < sequence.length; i++) {
    const light = sequence[i] as TrafficLight;

    if (prevLight === "red" && light !== "green") return false;
    if (prevLight === "green" && light !== "yellow") return false;
    if (prevLight === "yellow" && light !== "red") return false;

    prevLight = light;
  }

  return true;
};
