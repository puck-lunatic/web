function largestVariance(s: string): number {
  const n = s.length;
  let result = 0;
  // 97: a, 122: b
  for (let a = 97; a <= 122; a++) {
    for (let b = 97; b <= 122; b++) {
      if (a === b) {
        continue;
      }
      const dp: number[] = [0, -n];
      for (let i = 0; i < n; i++) {
        if (s.charAt(i) === String.fromCharCode(a)) {
          dp[0]++;
          dp[1]++;
        } else if (s.charAt(i) === String.fromCharCode(b)) {
          dp[1] = Math.max(dp[0] - 1, dp[1] - 1);
          dp[0] = 0;
        }
        result = Math.max(result, dp[1]);
      }
    }
  }
  return result;
}
