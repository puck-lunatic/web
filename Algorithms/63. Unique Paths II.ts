function uniquePathsWithObstacles(obstacleGrid: number[][]): number {
  if (obstacleGrid[0][0] === 1) {
    return 0;
  }
  const m = obstacleGrid.length;
  const n = obstacleGrid[0].length;
  const dp = Array.from({ length: m }, (_) => new Array(n).fill(0));
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (i === 0 && j === 0) {
        dp[i][j] = 1;
      } else if (i === 0) {
        if (obstacleGrid[0][j] === 1) {
          dp[i][j] = 0;
        } else {
          dp[i][j] = dp[i][j - 1];
        }
      } else if (j === 0) {
        if (obstacleGrid[i][0] === 1) {
          dp[i][j] = 0;
        } else {
          dp[i][j] = dp[i - 1][j];
        }
      } else {
        if (obstacleGrid[i][j] === 1) {
          dp[i][j] = 0;
        } else {
          dp[i][j] = dp[i - 1][j] + dp[i][j - 1];
        }
      }
    }
  }

  return dp[m - 1][n - 1];
}
