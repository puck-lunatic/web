function ways(pizza: string[], cuts: number): number {
  const MOD = 1000000007;

  const m = pizza.length,
    n = pizza[0].length;
  const dp = Array.from({ length: m }, () =>
    Array.from({ length: n }, () => Array(cuts).fill(0))
  );

  // Reversing the matrix
  // Optional, I'll just prefer top to bottom approach
  pizza.reverse();
  pizza.forEach((row, index) => {
    pizza[index] = row.split("").reverse().join("");
  });

  // Initialize presum array
  const presum = Array.from({ length: m }, (_, rowIndex) =>
    Array.from({ length: n }, (_, colIndex) =>
      pizza[rowIndex][colIndex] === "A" ? 1 : 0
    )
  );

  // Compute presum array
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (i > 0) {
        presum[i][j] += presum[i - 1][j];
      }
      if (j > 0) {
        presum[i][j] += presum[i][j - 1];
      }
      if (i > 0 && j > 0) {
        presum[i][j] -= presum[i - 1][j - 1];
      }
    }
  }

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      for (let k = 0; k < cuts; k++) {
        // dp[i][j][0] is 0 or 1 based on mat[i][j] having an apple
        if (k === 0 && presum[i][j] > 0) {
          dp[i][j][k] = 1;
          continue;
        }

        for (let i1 = 0; i1 < i; i1++) {
          if (presum[i][j] - presum[i1][j] > 0) {
            dp[i][j][k] += dp[i1][j][k - 1];
            dp[i][j][k] %= MOD;
          }
        }

        for (let j1 = 0; j1 < j; j1++) {
          if (presum[i][j] - presum[i][j1] > 0) {
            dp[i][j][k] += dp[i][j1][k - 1];
            dp[i][j][k] %= MOD;
          }
        }
      }
    }
  }

  return dp[m - 1][n - 1][cuts - 1];
}
