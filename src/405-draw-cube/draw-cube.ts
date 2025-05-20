const CORNER = "+";
const VERTICAL = "|";
const HORIZONTAL = "-";
const DIAGONAL = "/";
const SPACE = " ";

const NUMBER_OF_HORIZONTAL_LINES = 3;

export const drawCube = (size: number) => {
  const horizontalLine = Array.from({ length: size * 2 + 2 })
    .map((_, i, { length }) => (i === 0 || i === length - 1 ? CORNER : HORIZONTAL))
    .join("");
  const padding = Math.floor(size / 2);
  const rows = Array.from({ length: size + NUMBER_OF_HORIZONTAL_LINES + padding });

  return (
    "\n" +
    rows
      .map((_, i, { length }) => {
        if (i === 0) {
          return SPACE.repeat(padding + 1) + horizontalLine;
        } else if (i > 0 && i < padding + 1) {
          return (
            SPACE.repeat(padding + 1 - i) +
            DIAGONAL +
            SPACE.repeat(size * 2) +
            DIAGONAL +
            SPACE.repeat(Math.max(i - 1, 0)) +
            VERTICAL
          );
        } else if (i === padding + 1) {
          return horizontalLine + SPACE.repeat(padding) + VERTICAL;
        } else if (i > padding + 1 && i < length - 1) {
          let endItem = VERTICAL;
          let paddingEnd = padding;
          if (i === size + 1) {
            endItem = CORNER;
          }
          if (i > size + 1) {
            endItem = DIAGONAL;
            paddingEnd = length - i - 2;
          }
          return VERTICAL + SPACE.repeat(size * 2) + VERTICAL + SPACE.repeat(paddingEnd) + endItem;
        } else if (i === length - 1) {
          return horizontalLine;
        } else {
          return SPACE;
        }
      })
      .join("\n") +
    "\n"
  );
};
