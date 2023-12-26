function numRollsToTarget(n: number, k: number, target: number): number {
  const dp = Array.from({ length: n + 1 }, (_) => Array(target + 1).fill(0));
  dp[0][0] = 1;
  const MOD = 1_000_000_007;
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= Math.min(i * k, target); j++) {
      for (let h = 1; h <= Math.min(j, k); h++) {
        dp[i][j] = (dp[i][j] + dp[i - 1][j - h]) % MOD;
      }
    }
  }
  return dp[n][target];
}
