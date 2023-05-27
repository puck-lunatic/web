function stoneGameIII(stoneValue: number[]): string {
  const n = stoneValue.length;
  const pre = new Array(n + 1).fill(0);
  for (let i = 0; i < n; i++) {
    pre[i + 1] = pre[i] + stoneValue[i];
  }
  const dp = new Array(n + 4).fill(0);
  for (let i = n; i > 0; i--) {
    dp[i] = pre[n] - pre[i - 1] - Math.min(dp[i + 1], dp[i + 2], dp[i + 3]);
  }

  if (dp[1] * 2 > pre[n]) {
    return "Alice";
  }
  if (dp[1] * 2 < pre[n]) {
    return "Bob";
  }
  return "Tie";
}
