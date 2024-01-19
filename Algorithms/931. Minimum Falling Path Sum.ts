function minFallingPathSum(matrix: number[][]): number {
  const m = matrix.length;
  const n = matrix[0].length;
  const dp = Array.from({ length: m }, (_) =>
    new Array(n).fill(Number.POSITIVE_INFINITY)
  );
  for (let i = 0; i < n; i++) {
    dp[0][i] = matrix[0][i];
  }
  for (let i = 1; i < m; i++) {
    for (let j = 0; j < n; j++) {
      dp[i][j] =
        matrix[i][j] +
        Math.min(
          dp[i - 1][j - 1] === undefined
            ? Number.POSITIVE_INFINITY
            : dp[i - 1][j - 1],
          dp[i - 1][j],
          dp[i - 1][j + 1] === undefined
            ? Number.POSITIVE_INFINITY
            : dp[i - 1][j + 1]
        );
    }
  }

  return Math.min(...dp[m - 1]);
}
