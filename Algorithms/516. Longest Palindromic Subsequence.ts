function longestPalindromeSubseq(s: string): number {
  const length = s.length;
  const dp = Array.from({ length: length }, () => new Array(length).fill(0));
  for (let i = 0; i < length; i++) {
    dp[i][i] = 1;
  }
  for (let right = 1; right < length; right++) {
    for (let left = right - 1; left >= 0; left--) {
      if (s.charAt(left) === s.charAt(right)) {
        dp[left][right] = dp[left + 1][right - 1] + 2;
      } else {
        dp[left][right] = Math.max(dp[left + 1][right], dp[left][right - 1]);
      }
    }
  }
  return dp[0][length - 1];
}
