function singleNonDuplicate(nums: number[]): number {
  let left: number = 0;
  let right: number = nums.length - 1;

  while (left < right) {
    let mid: number = Math.floor((right - left) / 2) + left;
    if (mid % 2 === 1) {
      mid -= 1;
    }
    if (nums[mid] !== nums[mid + 1]) {
      right = mid;
    } else {
      left = mid + 2;
    }
  }

  return nums[left];
}
