function minimumReplacement(nums: number[]): number {
  const n = nums.length;
  let max = nums[n - 1];
  let result = 0;
  for (let i = n - 2; i >= 0; i--) {
    if (nums[i] <= max) {
      max = nums[i];
      continue;
    }
    const k = Math.ceil(nums[i] / max);
    result += k - 1;
    max = Math.floor(nums[i] / k);
  }
  return result;
}
