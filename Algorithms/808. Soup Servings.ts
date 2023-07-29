function soupServings(n: number): number {
  if (n >= 4800) {
    return 1;
  }
  // 4800 / 25
  const dp = Array.from({ length: 192 }, (_) => new Array(192).fill(-1));
  const dfs = (i: number, j: number): number => {
    if (i <= 0 && j <= 0) {
      return 0.5;
    }
    if (i <= 0) {
      return 1;
    }
    if (j <= 0) {
      return 0;
    }
    if (dp[i][j] !== -1) {
      return dp[i][j];
    }
    dp[i][j] =
      0.25 *
      (dfs(i - 4, j) +
        dfs(i - 3, j - 1) +
        dfs(i - 2, j - 2) +
        dfs(i - 1, j - 3));
    return dp[i][j];
  };
  return dfs(Math.ceil(n / 25), Math.ceil(n / 25));
}
