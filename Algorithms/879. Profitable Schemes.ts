function profitableSchemes(
  n: number,
  minProfit: number,
  group: number[],
  profit: number[]
): number {
  let dp = new Array(n + 1)
    .fill(null)
    .map(() => new Array(minProfit + 1).fill(0));
  dp.map((e) => {
    e[0] = 1;
    return e;
  });
  for (let i = 0; i < group.length; i++) {
    for (let j = n; j >= group[i]; j--) {
      for (let k = minProfit; k >= 0; k--) {
        dp[j][k] =
          (dp[j][k] + dp[j - group[i]][Math.max(0, k - profit[i])]) % (1e9 + 7);
      }
    }
  }
  return dp[n][minProfit];
}
