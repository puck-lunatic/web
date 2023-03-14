function longestPalindrome(s: string): string {
  const length = s.length;
  const dp: boolean[][] = [];
  for (let i = 0; i < length; i++) {
    const array = [];
    for (let j = 0; j < length; j++) {
      j === i + 1 ? array.push(true) : array.push(false);
    }
    dp.push(array);
  }

  let max: number = 1,
    start: number = 0;
  for (let j = 0; j < length; j++) {
    for (let i = 0; i <= j; i++) {
      if (j - i < 2) {
        dp[i][j] = s.charAt(i) === s.charAt(j);
      } else {
        dp[i][j] = dp[i + 1][j - 1] && s.charAt(i) === s.charAt(j);
      }

      if (dp[i][j] && max < j - i + 1) {
        max = j - i + 1;
        start = i;
      }
    }
  }
  return s.slice(start, start + max);
}
