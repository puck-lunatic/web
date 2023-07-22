function knightProbability(
  n: number,
  k: number,
  row: number,
  column: number
): number {
  const dp = Array.from({ length: k + 1 }, (_) =>
    Array.from({ length: n }, (_) => Array.from({ length: n }, (_) => 0))
  );
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      dp[0][i][j] = 1;
    }
  }
  const directions = [-2, -1, 2, 1, -2, 1, 2, -1, -2];
  for (let h = 1; h <= k; h++) {
    for (let i = 0; i < n; i++) {
      for (let j = 0; j < n; j++) {
        // directions
        for (let p = 0; p < 8; p++) {
          const x = i + directions[p];
          const y = j + directions[p + 1];
          if (x >= 0 && x < n && y >= 0 && y < n) {
            dp[h][i][j] += dp[h - 1][x][y] / 8;
          }
        }
      }
    }
  }

  return dp[k][row][column];
}
