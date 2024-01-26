function findPaths(
  m: number,
  n: number,
  maxMove: number,
  startRow: number,
  startColumn: number
): number {
  const MOD = 1_000_000_007;
  let dp = Array.from({ length: m }, (_) => new Array(n).fill(0));
  dp[startRow][startColumn] = 1;
  let result = 0;

  for (let moves = 1; moves <= maxMove; moves++) {
    let temp = Array.from({ length: m }, (_) => new Array(n).fill(0));
    for (let i = 0; i < m; i++) {
      for (let j = 0; j < n; j++) {
        if (i === m - 1) {
          result = (result + dp[i][j]) % MOD;
        }
        if (j === n - 1) {
          result = (result + dp[i][j]) % MOD;
        }
        if (i === 0) {
          result = (result + dp[i][j]) % MOD;
        }
        if (j === 0) {
          result = (result + dp[i][j]) % MOD;
        }
        temp[i][j] =
          ((((i > 0 ? dp[i - 1][j] : 0) + (i < m - 1 ? dp[i + 1][j] : 0)) %
            MOD) +
            (((j > 0 ? dp[i][j - 1] : 0) + (j < n - 1 ? dp[i][j + 1] : 0)) %
              MOD)) %
          MOD;
      }
    }
    dp = temp;
  }

  return result;
}
