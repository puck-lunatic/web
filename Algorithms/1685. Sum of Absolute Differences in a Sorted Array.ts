function getSumAbsoluteDifferences(nums: number[]): number[] {
  const n = nums.length;
  const result = Array(n).fill(-1);
  result[0] = nums.reduce((a, c) => a + Math.abs(c - nums[0]), 0);

  for (let i = 1; i < n; i++) {
    const prev = nums[i] - nums[i - 1];
    result[i] = result[i - 1] + i * prev - (n - i) * prev;
  }

  return result;
}
