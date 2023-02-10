function canPartition(nums: number[]): boolean {
  if (nums.length === 1) {
    return false;
  }
  const total: number = nums.reduce((acc, cur) => acc + cur, 0);
  if (total % 2 === 1) {
    return false;
  }
  const target = total / 2;
  const dp: boolean[] = new Array(target + 1).fill(false);
  dp[0] = true;
  for (let num of nums) {
    for (let i = target; i >= num; --i) {
      dp[i] = dp[i] || dp[i - num];
    }
  }
  console.log(dp);
  return dp[target];
}
