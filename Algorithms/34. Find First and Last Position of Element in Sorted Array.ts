function searchRange(nums: number[], target: number): number[] {
  if (nums.length < 1) {
    return [-1, -1];
  }
  let n = nums.length;
  let base = 0;
  while (n > 1) {
    let half = n >> 1;
    let mid = base + half;
    if (nums[mid] <= target) {
      base = mid;
    }
    n -= half;
  }
  if (nums[base] === target) {
    let start = base;
    while (start > 0 && nums[start - 1] === target) {
      start -= 1;
    }
    let end = base;
    while (end < nums.length - 1 && nums[end + 1] === target) {
      end += 1;
    }
    return [start, end];
  }
  return [-1, -1];
}
