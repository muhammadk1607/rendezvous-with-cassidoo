import { maxSubarray } from './max-subarray';

interface maxSubarrayTest {
  input: [number[], number];
  output: number[];
}

const maxSubarrayTests: maxSubarrayTest[] = [
  {
    input: [[-4, 2, -5, 1, 2, 3, 6, -5, 1], 4],
    output: [1, 2, 3, 6],
  },
  {
    input: [[-4, 2, -5, 1, 2, 3, 6, -5, 1], 5],
    output: [-5, 1, 2, 3, 6],
  },
  {
    input: [[1, 2, 0, 5], 2],
    output: [0, 5],
  },
];

describe('testing maxSubarray', () => {
  it.each(maxSubarrayTests)(
    'should replace each consecutive run of the digit 0 with its length',
    test => {
      expect(maxSubarray(...test.input)).toStrictEqual(test.output);
    },
  );
});
