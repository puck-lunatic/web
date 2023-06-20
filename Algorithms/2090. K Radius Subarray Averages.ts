function getAverages(nums: number[], k: number): number[] {
  if (k === 0) {
    return nums;
  }
  const n = nums.length;
  const result: number[] = [];
  for (let i = 0; i < n; i++) {
    if (i - k < 0 || i + k >= n) {
      result.push(-1);
      continue;
    }
    const l = i - k;
    const r = i + k;
    let sum = 0;
    for (let j = l; j <= r; j++) {
      sum += nums[j];
    }
    result.push(Math.floor(sum / (2 * k + 1)));
  }

  return result;
}
