function largestDivisibleSubset(nums: number[]): number[] {
  nums.sort((a, b) => a - b);
  const n = nums.length;
  const dp = new Array(n).fill(1);
  let k = 0;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < i; j++) {
      if (nums[i] % nums[j] === 0) {
        dp[i] = Math.max(dp[i], dp[j] + 1);
      }
    }
    if (dp[k] < dp[i]) {
      k = i;
    }
  }
  let m = dp[k];
  const result: number[] = [];
  for (let i = k; m > 0; i--) {
    if (nums[k] % nums[i] === 0 && dp[i] === m) {
      result.push(nums[i]);
      k = i;
      m -= 1;
    }
  }
  return result;
}
