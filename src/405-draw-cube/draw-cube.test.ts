import { describe, expect, test } from "vitest";
import { drawCube } from "./draw-cube.js";

type TDrawCubeTestCase = {
  input: number;
  output: string;
};

const TEST_CASES: TDrawCubeTestCase[] = [
  {
    input: 2,
    output: `
  +----+
 /    /|
+----+ |
|    | +
|    |/
+----+
`,
  },
  {
    input: 4,
    output: `
   +--------+
  /        /|
 /        / |
+--------+  |
|        |  |
|        |  +
|        | /
|        |/
+--------+
`,
  },
];

describe("drawCube", () => {
  TEST_CASES.forEach(t => {
    test(`should return ${t.output} when given ${t.input}`, () => {
      expect(drawCube(t.input)).toEqual(t.output);
    });
  });
});
