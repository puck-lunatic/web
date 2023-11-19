function reductionOperations(nums: number[]): number {
  nums.sort((a, b) => a - b);
  let result = 0;
  let cnt = 0;
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] !== nums[i - 1]) {
      cnt += 1;
    }
    result += cnt;
  }
  return result;
}
