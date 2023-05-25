function new21Game(n: number, k: number, maxPts: number): number {
  if (k === 0) {
    return 1;
  }
  const dp = new Array(k + maxPts).fill(0);
  for (let i = k; i < Math.min(n + 1, k + maxPts); i++) {
    dp[i] = 1;
  }
  dp[k - 1] = Math.min(n - k + 1, maxPts) / maxPts;
  for (let i = k - 2; i >= 0; i--) {
    dp[i] = dp[i + 1] + (dp[i + 1] - dp[i + maxPts + 1]) / maxPts;
  }
  return dp[0];
}
