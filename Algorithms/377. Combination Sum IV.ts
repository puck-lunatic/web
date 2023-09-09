function combinationSum4(nums: number[], target: number): number {
  const dp = new Array(target + 1).fill(0);
  dp[0] = 1;
  for (let i = 1; i <= target; i++) {
    for (const j of nums) {
      if (i - j >= 0) {
        dp[i] += dp[i - j];
      }
    }
  }
  return dp[target];
}
