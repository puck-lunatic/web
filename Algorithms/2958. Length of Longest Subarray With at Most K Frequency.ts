function maxSubarrayLength(nums: number[], k: number): number {
  const count = {};
  let result = 0;
  const n = nums.length;
  for (let i = 0, j = 0; i < n; i++) {
    count[nums[i]] = (count[nums[i]] ?? 0) + 1;
    for (; count[nums[i]] > k; j++) {
      count[nums[j]] = (count[nums[j]] ?? 0) - 1;
    }
    result = Math.max(result, i - j + 1);
  }
  return result;
}
