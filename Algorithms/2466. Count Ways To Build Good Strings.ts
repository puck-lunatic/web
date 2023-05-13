function countGoodStrings(
  low: number,
  high: number,
  zero: number,
  one: number
): number {
  const MOD = 1_000_000_007;
  const short = Math.min(zero, one);
  const long = Math.max(zero, one);
  let dp: number[] = new Array(high + 1).fill(0);
  dp[short] += 1;
  // console.log(dp);
  for (let i = short + 1; i <= long; i++) {
    dp[i] = dp[i - short];
  }
  dp[long] += 1;
  // console.log(dp);
  for (let i = long + 1; i <= high; i++) {
    dp[i] = (dp[i - zero] + dp[i - one]) % MOD;
  }
  // console.log(dp);
  let result = 0;
  for (let i = low; i <= high; i++) {
    result += dp[i];
    result %= MOD;
  }
  return result;
}
