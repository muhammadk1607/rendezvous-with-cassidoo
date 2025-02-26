import { describe, expect, test } from "vitest";
import { getNoteNames } from "./get-note-names.js";

type TGetNoteNames = {
  input: number[];
  output: string[];
};

const TEST_CASES: TGetNoteNames[] = [
  {
    input: [440, 490, 524, 293.66],
    output: [
      "This is a A",
      "This is a B, but it's flat",
      "This is a C, but it's sharp",
      "This is a D",
    ],
  },
];

describe("getNoteNames", () => {
  TEST_CASES.forEach((t, i) => {
    test(`should return ${JSON.stringify(t.output)} when given ${JSON.stringify(t.input)}`, () => {
      expect(getNoteNames(t.input)).toEqual(t.output);
    });
  });
});
