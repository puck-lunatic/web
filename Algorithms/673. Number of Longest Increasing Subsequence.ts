function findNumberOfLIS(nums: number[]): number {
  const n = nums.length;
  let result = 0;
  let maxlength = 0;
  const dp: number[] = new Array(n).fill(0);
  const count: number[] = new Array(n).fill(1);
  for (let i = 0; i < n; i++) {
    dp[i] = 1;
    count[i] = 1;
    for (let j = 0; j < i; j++) {
      if (nums[i] > nums[j]) {
        if (dp[j] + 1 > dp[i]) {
          dp[i] = dp[j] + 1;
          count[i] = count[j];
        } else if (dp[j] + 1 === dp[i]) {
          count[i] += count[j];
        }
      }
    }
    if (dp[i] > maxlength) {
      maxlength = dp[i];
      result = count[i];
    } else if (dp[i] === maxlength) {
      result += count[i];
    }
  }
  return result;
}
