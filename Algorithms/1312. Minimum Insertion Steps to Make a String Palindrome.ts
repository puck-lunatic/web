function minInsertions(s: string): number {
  const length = s.length;
  const dp = Array.from({ length: length }, () => Array(length).fill(0));
  for (let i = length - 2; i >= 0; i--) {
    for (let j = i + 1; j < length; j++) {
      if (s.charAt(i) === s.charAt(j)) {
        dp[i][j] = dp[i + 1][j - 1];
      } else {
        dp[i][j] = Math.min(dp[i + 1][j], dp[i][j - 1]) + 1;
      }
    }
  }
  return dp[0][length - 1];
}
