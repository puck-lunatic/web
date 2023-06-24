function tallestBillboard(rods: number[]): number {
  const sum = rods.reduce((acc, cur) => acc + cur, 0);
  const n = rods.length;
  const dp = Array.from({ length: n }, (_) => new Array(sum + 1).fill(-1));
  const dfs = (i: number, j: number): number => {
    if (i === n) {
      return j === 0 ? 0 : Number.NEGATIVE_INFINITY;
    }
    if (dp[i][j] !== -1) {
      return dp[i][j];
    }
    let result = Math.max(dfs(i + 1, j), dfs(i + 1, j + rods[i]));
    result = Math.max(
      result,
      dfs(i + 1, Math.abs(j - rods[i])) + Math.min(j, rods[i])
    );
    return (dp[i][j] = result);
  };

  return dfs(0, 0);
}
