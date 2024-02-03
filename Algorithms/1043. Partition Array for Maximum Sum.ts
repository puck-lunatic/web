function maxSumAfterPartitioning(arr: number[], k: number): number {
  const n = arr.length;
  const dp = new Array(n + 1).fill(0);
  for (let i = 1; i <= n; i++) {
    let max = 0;
    for (let j = i; j > Math.max(0, i - k); j--) {
      max = Math.max(max, arr[j - 1]);
      dp[i] = Math.max(dp[i], dp[j - 1] + max * (i - j + 1));
    }
  }
  return dp[n];
}
