function maxDotProduct(nums1: number[], nums2: number[]): number {
  const m = nums1.length;
  const n = nums2.length;
  const dp: number[][] = Array.from({ length: m + 1 }, (_) =>
    new Array(n + 1).fill(Number.NEGATIVE_INFINITY)
  );

  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
      dp[i][j] = Math.max(
        dp[i][j],
        Math.max(0, dp[i - 1][j - 1]) + nums1[i - 1] * nums2[j - 1]
      );
    }
  }
  return dp[m][n];
}
