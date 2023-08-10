function search(nums: number[], target: number): boolean {
  let l: number = 0;
  let r: number = nums.length - 1;
  while (l <= r) {
    const mid: number = Math.floor((l + r) / 2);
    if (nums[mid] === target) {
      return true;
    }
    if (nums[mid] < nums[r] || nums[mid] < nums[l]) {
      if (nums[mid] < target && nums[r] >= target) {
        l = mid + 1;
      } else {
        r = mid - 1;
      }
    } else if (nums[mid] > nums[l] || nums[mid] > nums[r]) {
      if (nums[l] <= target && nums[mid] > target) {
        r = mid - 1;
      } else {
        l = mid + 1;
      }
    } else {
      r -= 1;
    }
  }
  return false;
}
