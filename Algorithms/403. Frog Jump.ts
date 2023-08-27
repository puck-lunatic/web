function canCross(stones: number[]): boolean {
  const n = stones.length;
  const dp = Array.from({ length: n }, (_) => new Array(n).fill(false));
  dp[0][0] = true;
  for (let i = 1; i < n; i++) {
    for (let j = i - 1; j >= 0; j--) {
      const k = stones[i] - stones[j];
      if (k - 1 > j) {
        break;
      }
      dp[i][k] = dp[j][k - 1] || dp[j][k] || dp[j][k + 1];
      if (i === n - 1 && dp[i][k]) {
        return true;
      }
    }
  }
  return false;
}
