function minOperations(nums: number[]): number {
  const n = nums.length;
  nums.sort((a, b) => a - b);
  let m = 1;
  for (let i = 1; i < n; i++) {
    if (nums[i] !== nums[i - 1]) {
      nums[m++] = nums[i];
    }
  }
  let result = n;
  const search = (
    nums: number[],
    x: number,
    left: number,
    right: number
  ): number => {
    while (left < right) {
      const mid = (left + right) >> 1;
      if (nums[mid] > x) {
        right = mid;
      } else {
        left = mid + 1;
      }
    }
    return left;
  };
  for (let i = 0; i < m; i++) {
    const j = search(nums, nums[i] + n - 1, i, m);
    result = Math.min(result, n - (j - i));
  }
  return result;
}
