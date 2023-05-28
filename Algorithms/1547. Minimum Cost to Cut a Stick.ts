function minCost(n: number, cuts: number[]): number {
  cuts.push(0);
  cuts.push(n);
  cuts.sort((a, b) => a - b);
  const m = cuts.length;
  const dp: number[][] = Array.from({ length: m }, (_) => new Array(m).fill(0));
  for (let i = m - 2; i >= 0; i--) {
    for (let j = i + 2; j < m; j++) {
      dp[i][j] = Number.MAX_SAFE_INTEGER;
      for (let k = i + 1; k < j; k++) {
        dp[i][j] = Math.min(dp[i][j], dp[i][k] + dp[k][j] + cuts[j] - cuts[i]);
      }
    }
  }
  return dp[0][m - 1];
}
