function maxProductDifference(nums: number[]): number {
  const n = nums.length;
  nums.sort((a, b) => a - b);
  return nums[n - 1] * nums[n - 2] - nums[1] * nums[0];
}
