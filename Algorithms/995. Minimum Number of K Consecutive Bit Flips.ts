function minKBitFlips(nums: number[], k: number): number {
  const n = nums.length;
  const dp = Array(n + 1).fill(0);
  let [result, sum] = [0, 0];
  for (let i = 0; i < n; i++) {
    sum += dp[i];
    if (sum % 2 === nums[i] % 2) {
      if (i + k > n) {
        return -1;
      }
      dp[i] += 1;
      dp[i + k] -= 1;
      sum += 1;
      result += 1;
    }
  }
  return result;
}
