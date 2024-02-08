function numSquares(n: number): number {
  const m = Math.floor(Math.sqrt(n));
  const dp: number[][] = Array.from({ length: m + 1 }, (_) =>
    Array(n + 1).fill(1 << 30)
  );
  dp[0][0] = 0;
  for (let i = 1; i <= m; i++) {
    for (let j = 0; j <= n; j++) {
      dp[i][j] = dp[i - 1][j];
      if (j >= i * i) {
        dp[i][j] = Math.min(dp[i][j], dp[i][j - i * i] + 1);
      }
    }
  }
  return dp[m][n];
}
