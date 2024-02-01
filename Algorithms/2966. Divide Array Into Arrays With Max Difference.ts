function divideArray(nums: number[], k: number): number[][] {
  const result: number[][] = [];
  nums.sort((a, b) => a - b);
  let temp: number[] = [];
  for (const num of nums) {
    if (temp.length === 0) {
      temp.push(num);
      continue;
    }

    if (
      num - temp[temp.length - 1] > k ||
      (temp.length === 2 && num - temp[temp.length - 2] > k)
    ) {
      return [];
    }
    temp.push(num);

    if (temp.length === 3) {
      result.push(temp);
      temp = [];
    }
  }
  return result;
}
