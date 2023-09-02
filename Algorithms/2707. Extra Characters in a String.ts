function minExtraChar(s: string, dictionary: string[]): number {
  const n = s.length;
  const dp = new Array(n + 1).fill(0);
  for (let i = 1; i <= n; i++) {
    dp[i] = dp[i - 1] + 1;
    for (let j = 0; j < i; j++) {
      if (dictionary.includes(s.substring(j, i))) {
        dp[i] = Math.min(dp[i], dp[j]);
      }
    }
  }
  return dp[n];
}
