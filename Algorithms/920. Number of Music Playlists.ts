function numMusicPlaylists(n: number, goal: number, k: number): number {
  const MOD = 1_000_000_007;
  const dp = Array.from({ length: goal + 1 }, (_) => new Array(n + 1).fill(0));
  dp[0][0] = 1;
  for (let i = 1; i <= goal; i++) {
    for (let j = 1; j <= n; j++) {
      dp[i][j] = dp[i - 1][j - 1] * (n - j + 1);
      if (j > k) {
        dp[i][j] += dp[i - 1][j] * (j - k);
      }
      dp[i][j] %= MOD;
    }
  }
  return dp[goal][n];
}
