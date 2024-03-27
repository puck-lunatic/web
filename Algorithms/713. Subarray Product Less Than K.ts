function numSubarrayProductLessThanK(nums: number[], k: number): number {
  let result = 0;
  for (let i = 0, j = 0, s = 1; i < nums.length; i++) {
    s *= nums[i];
    while (j <= i && s >= k) {
      s /= nums[j++];
    }
    result += i - j + 1;
  }
  return result;
}
