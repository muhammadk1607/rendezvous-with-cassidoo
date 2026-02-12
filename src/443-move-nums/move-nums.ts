export const moveNums = (arr: number[], num: number): number[] => {
  const newArr: number[] = [];
  const nums: number[] = [];

  for (let i = 0; i < arr.length; i++) {
    const iNum = arr[i];

    if (iNum === num) {
      nums.push(iNum);
    } else if (iNum) {
      newArr.push(iNum);
    }
  }

  return newArr.concat(nums);
};
