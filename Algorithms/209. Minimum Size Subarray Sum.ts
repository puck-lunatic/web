function minSubArrayLen(target: number, nums: number[]): number {
  const n = nums.length;
  let sum = 0;
  let result = n + 1;
  for (let i = 0, j = 0; i < n; i++) {
    sum += nums[i];
    while (sum >= target) {
      result = Math.min(result, i - j + 1);
      sum -= nums[j];
      j++;
    }
  }
  return result === n + 1 ? 0 : result;
}
