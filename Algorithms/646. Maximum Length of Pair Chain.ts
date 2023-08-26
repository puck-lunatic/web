function findLongestChain(pairs: number[][]): number {
  pairs.sort((a, b) => a[0] - b[0]);
  // console.log(pairs);
  const n = pairs.length;
  const dp = new Array(n);
  let result = 0;
  for (let i = 0; i < n; i++) {
    dp[i] = 1;
    const curLeft = pairs[i][0];
    for (let j = 0; j < i; j++) {
      const preRight = pairs[j][1];
      if (preRight < curLeft) {
        dp[i] = Math.max(dp[i], dp[j] + 1);
      }
    }
    result = Math.max(result, dp[i]);
  }
  return result;
}
