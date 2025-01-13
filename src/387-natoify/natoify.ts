const NATO_ALPHABET_MAP = {
  a: "Alpha",
  b: "Bravo",
  c: "Charlie",
  d: "Delta",
  e: "Echo",
  f: "Foxtrot",
  g: "Golf",
  h: "Hotel",
  i: "India",
  j: "Juliett",
  k: "Kilo",
  l: "Lima",
  m: "Mike",
  n: "November",
  o: "Oscar",
  p: "Papa",
  q: "Quebec",
  r: "Romeo",
  s: "Sierra",
  t: "Tango",
  u: "Uniform",
  v: "Victor",
  w: "Whiskey",
  x: "X-ray",
  y: "Yankee",
  z: "Zulu",
  " ": "(space)",
  1: "One",
  2: "Two",
  3: "Three",
  4: "Four",
  5: "Five",
  6: "Six",
  7: "Seven",
  8: "Eight",
  9: "Nine",
  0: "Zero",
  ".": "Stop",
  ",": "Comma",
  "!": "Exclamation mark",
  "?": "Question mark",
  "'": "Apostrophe",
  "“": "Quote",
  "”": "Unquote",
  "-": "Hyphen",
  _: "Underscore",
  ":": "Colon",
  ";": "Semicolon",
  "(": "Bracket on",
  ")": "Bracket off",
  "/": "Slant",
  "\\": "Backslant",
} as const;

type NATO_KEY = keyof typeof NATO_ALPHABET_MAP;

export const natoify = (s: string) => {
  let result = "";
  for (const char of s) {
    const lowerChar = char.toLowerCase();

    if (lowerChar in NATO_ALPHABET_MAP) {
      result += NATO_ALPHABET_MAP[lowerChar as NATO_KEY] + " ";
    } else {
      result += char;
    }
  }

  return result.trim();
};
