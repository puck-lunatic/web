function productExceptSelf(nums: number[]): number[] {
  const n = nums.length;
  const result: number[] = new Array(n);
  for (let i = 0, left = 1; i < n; i++) {
    result[i] = left;
    left *= nums[i];
  }
  for (let i = n - 1, right = 1; i >= 0; i--) {
    result[i] *= right;
    right *= nums[i];
  }
  return result;
}
