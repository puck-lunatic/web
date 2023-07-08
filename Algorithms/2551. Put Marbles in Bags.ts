function putMarbles(weights: number[], k: number): number {
  const n = weights.length;
  const dp: number[] = [];
  for (let i = 0; i < n - 1; i++) {
    dp.push(weights[i] + weights[i + 1]);
  }
  dp.sort((a, b) => a - b);
  let result = 0;
  for (let i = 0; i < k - 1; i++) {
    result += dp[n - i - 2] - dp[i];
  }
  return result;
}
