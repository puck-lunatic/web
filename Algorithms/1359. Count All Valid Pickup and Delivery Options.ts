function countOrders(n: number): number {
  const MOD = 1_000_000_007;
  const dp = new Array(n + 1).fill(0);
  dp[1] = 1;
  for (let i = 2; i <= n; i++) {
    dp[i] = (dp[i - 1] * i * (2 * i - 1)) % MOD;
  }
  return dp[n];
}
