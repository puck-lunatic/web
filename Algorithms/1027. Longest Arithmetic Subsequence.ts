function longestArithSeqLength(nums: number[]): number {
  const n = nums.length;
  let result = 0;
  const dp: number[][] = Array.from({ length: n }, (_) =>
    new Array(1001).fill(0)
  );
  for (let i = 1; i < n; i++) {
    for (let k = 0; k < i; k++) {
      const j = nums[i] - nums[k] + 500;
      dp[i][j] = Math.max(dp[i][j], dp[k][j] + 1);
      result = Math.max(result, dp[i][j]);
    }
  }
  return result + 1;
}
