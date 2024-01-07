function numberOfArithmeticSlices(nums: number[]): number {
  const n = nums.length;
  const dp: Map<number, number>[] = Array.from({ length: n }, (_) => new Map());
  let result = 0;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < i; j++) {
      const diff = nums[i] - nums[j];
      const count = dp[j].get(diff) || 0;
      result += count;
      dp[i].set(diff, (dp[i].get(diff) || 0) + count + 1);
    }
  }
  return result;
}
