function sortArrayByParity(nums: number[]): number[] {
  const result: number[] = [];
  for (const num of nums) {
    if (num % 2 === 0) {
      result.unshift(num);
    } else {
      result.push(num);
    }
  }
  return result;
}
