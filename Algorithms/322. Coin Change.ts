function coinChange(coins: number[], amount: number): number {
  if (amount === 0) {
    return 0;
  }
  const length: number = amount + 1;
  const dp: number[] = new Array(length).fill(-1);
  dp[0] = 0;

  for (let i = 1; i < length; i++) {
    for (let coin of coins) {
      if (coin <= i) {
        let j: number = i - coin;
        if (dp[j] !== -1) {
          if (dp[i] === -1) {
            dp[i] = dp[j] + 1;
          } else {
            dp[i] = Math.min(dp[i], dp[j] + 1);
          }
        }
      }
    }
  }
  return dp[amount];
}
