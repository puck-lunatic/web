function strangePrinter(s: string): number {
  const n = s.length;
  const dp = Array.from({ length: n }, (_) =>
    new Array(n).fill(Number.POSITIVE_INFINITY)
  );
  for (let i = n - 1; i >= 0; i--) {
    dp[i][i] = 1;
    for (let j = i + 1; j < n; j++) {
      if (s[i] === s[j]) {
        dp[i][j] = dp[i][j - 1];
      } else {
        for (let k = i; k < j; k++) {
          dp[i][j] = Math.min(dp[i][j], dp[i][k] + dp[k + 1][j]);
        }
      }
    }
  }
  return dp[0][n - 1];
}
