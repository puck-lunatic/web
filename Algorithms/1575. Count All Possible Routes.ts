function countRoutes(
  locations: number[],
  start: number,
  finish: number,
  fuel: number
): number {
  const n = locations.length;
  const dp = Array.from({ length: n }, (_) => Array(fuel + 1).fill(0));
  for (let k = 0; k <= fuel; k++) {
    dp[finish][k] = 1;
  }
  const MOD = 1_000_000_007;
  for (let k = 0; k <= fuel; k++) {
    for (let i = 0; i < n; i++) {
      for (let j = 0; j < n; j++) {
        if (j !== i && Math.abs(locations[i] - locations[j]) <= k) {
          dp[i][k] =
            (dp[i][k] + dp[j][k - Math.abs(locations[i] - locations[j])]) % MOD;
        }
      }
    }
  }
  return dp[start][fuel];
}
