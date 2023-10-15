function numWays(steps: number, arrLen: number): number {
  const MOD = 1_000_000_007;
  const dp = Array.from({ length: steps }, (_) => Array(steps + 1).fill(-1));
  const dfs = (i: number, j: number) => {
    if (i > j || i >= arrLen || i < 0 || j < 0) {
      return 0;
    }
    if (i === 0 && j === 0) {
      return 1;
    }
    if (dp[i][j] !== -1) {
      return dp[i][j];
    }
    let temp = 0;
    for (let step = -1; step <= 1; step++) {
      temp = (temp + dfs(i + step, j - 1)) % MOD;
    }
    return (dp[i][j] = temp);
  };
  return dfs(0, steps);
}
