function rob(nums: number[]): number {
  if (nums.length === 1) {
    return nums[0];
  }
  if (nums.length === 2) {
    return Math.max(nums[0], nums[1]);
  }
  const dp: number[] = [nums[0], Math.max(nums[0], nums[1])];
  for (let i = 2; i < nums.length; i++) {
    dp.push(Math.max(nums[i] + dp[i - 2], dp[i - 1]));
  }
  return dp[nums.length - 1];
}
