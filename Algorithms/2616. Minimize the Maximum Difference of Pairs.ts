function minimizeMax(nums: number[], p: number): number {
  // if (p === 0) {
  //     return 0;
  // }
  const n = nums.length;
  nums.sort((a, b) => a - b);
  let left = 0,
    right = nums[n - 1] - nums[0] + 1;
  const count = (nums: number[], diff: number): number => {
    let result = 0;
    for (let i = 0; i < nums.length - 1; i++) {
      if (nums[i + 1] - nums[i] <= diff) {
        result++;
        i++;
      }
    }
    return result;
  };
  while (left < right) {
    const mid = (left + right) >>> 1;
    if (count(nums, mid) >= p) {
      right = mid;
    } else {
      left = mid + 1;
    }
  }
  return left;
}
