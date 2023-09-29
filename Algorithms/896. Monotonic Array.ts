function isMonotonic(nums: number[]): boolean {
  const n = nums.length;
  if (nums.length === 1) {
    return true;
  }
  const arr: number[] = [];
  for (let i = 1; i < n; i++) {
    arr.push(nums[i] - nums[i - 1]);
  }
  return arr.every((e) => e >= 0) || arr.every((e) => e <= 0);
}
