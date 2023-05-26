function stoneGameII(piles: number[]): number {
  const n = piles.length;
  const dp = Array.from({ length: n }, (_) => new Array(n + 1).fill(0));
  const sum = new Array(n + 1).fill(0);
  for (let i = 0; i < n; i++) {
    sum[i + 1] = sum[i] + piles[i];
  }
  const dfs = (i: number, m: number) => {
    if (m * 2 >= n - i) {
      return sum[n] - sum[i];
    }
    if (dp[i][m] > 0) {
      return dp[i][m];
    }
    let res = 0;
    for (let x = 1; x <= m * 2; x++) {
      res = Math.max(res, sum[n] - sum[i] - dfs(i + x, Math.max(m, x)));
    }
    dp[i][m] = res;
    return res;
  };
  return dfs(0, 1);
}
