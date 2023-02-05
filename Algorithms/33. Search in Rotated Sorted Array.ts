function search(nums: number[], target: number): number {
  let l: number = 0;
  let r: number = nums.length - 1;
  while (l <= r) {
    const mid: number = Math.floor((l + r) / 2);
    if (nums[mid] === target) {
      return mid;
    }
    if (nums[mid] < nums[r]) {
      if (nums[mid] < target && nums[r] >= target) {
        l = mid + 1;
      } else {
        r = mid - 1;
      }
    } else {
      if (nums[l] <= target && nums[mid] > target) {
        r = mid - 1;
      } else {
        l = mid + 1;
      }
    }
  }
  return -1;
}
