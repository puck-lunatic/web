function cherryPickup(grid: number[][]): number {
  const m = grid.length;
  const n = grid[0].length;
  const dp: number[][][] = new Array(m)
    .fill(0)
    .map((_) => new Array(n).fill(0).map((_) => new Array(n).fill(-1)));
  dp[0][0][n - 1] = grid[0][0] + grid[0][n - 1];
  for (let i = 1; i < m; i++) {
    for (let j1 = 0; j1 < n; j1++) {
      for (let j2 = 0; j2 < n; j2++) {
        const x = grid[i][j1] + (j1 === j2 ? 0 : grid[i][j2]);
        for (let y1 = j1 - 1; y1 <= j1 + 1; y1++) {
          for (let y2 = j2 - 1; y2 <= j2 + 1; y2++) {
            if (
              y1 >= 0 &&
              y1 < n &&
              y2 >= 0 &&
              y2 < n &&
              dp[i - 1][y1][y2] !== -1
            ) {
              dp[i][j1][j2] = Math.max(dp[i][j1][j2], dp[i - 1][y1][y2] + x);
            }
          }
        }
      }
    }
  }
  let result = 0;
  for (let j1 = 0; j1 < n; j1++) {
    for (let j2 = 0; j2 < n; j2++) {
      result = Math.max(result, dp[m - 1][j1][j2]);
    }
  }
  return result;
}
