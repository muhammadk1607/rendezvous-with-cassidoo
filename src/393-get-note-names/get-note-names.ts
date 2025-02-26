const BASE_NOTES: Record<string, number>[] = [
  { C: 8.175799 },
  { "C♯/D♭": 8.661957 },
  { D: 9.177024 },
  { "D♯/E♭": 9.722718 },
  { E: 10.30086 },
  { F: 10.91338 },
  { "F♯/G♭": 11.56233 },
  { G: 12.24986 },
  { "G♯/A♭": 12.97827 },
  { A: 13.75 },
  { "A♯/B♭": 14.56762 },
  { B: 15.43385 },
];

let notes: { name: string; frequency: number }[] = [];

BASE_NOTES.forEach((note, i) => {
  const name = Object.keys(note)[0] as string;
  const baseFrequency = note[name] as number;

  for (let octave = 1; octave <= 11; octave++) {
    const frequency = baseFrequency * Math.pow(2, octave);
    notes.push({ name, frequency });
  }
});

console.log(notes);

export const getNoteName = (frequency: number): string => {
  let closestNote = notes.sort(
    (a, b) => Math.abs(a.frequency - frequency) - Math.abs(b.frequency - frequency),
  )[0];

  if (!closestNote) throw new Error("No note found");

  let text = `This is a ${closestNote.name}`;
  if (Number(Math.abs(closestNote.frequency - frequency).toFixed(2))) {
    text += ", but it's ";
    text += frequency < closestNote.frequency ? "flat" : "sharp";
  }

  return text;
};

export const getNoteNames = (frequencies: number[]): string[] => {
  const notes = frequencies.map(frequency => {
    const note = getNoteName(frequency);
    return note;
  });
  return notes;
};
