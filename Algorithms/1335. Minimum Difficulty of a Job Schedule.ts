function minDifficulty(jobDifficulty: number[], d: number): number {
  const n = jobDifficulty.length;
  const dp: number[][] = new Array(n + 1)
    .fill(0)
    .map(() => new Array(d + 1).fill(Number.POSITIVE_INFINITY));
  dp[0][0] = 0;
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= Math.min(d, i); j++) {
      let max = 0;
      for (let k = i; k > 0; k--) {
        max = Math.max(max, jobDifficulty[k - 1]);
        dp[i][j] = Math.min(dp[i][j], dp[k - 1][j - 1] + max);
      }
    }
  }
  return dp[n][d] < Number.POSITIVE_INFINITY ? dp[n][d] : -1;
}
