/**
 Do not return anything, modify nums in-place instead.
 */
function sortColors(nums: number[]): void {
  // nums.sort((a, b) => a - b);
  const length = nums.length;
  if (length < 2) {
    return;
  }
  let p0 = 0,
    p2 = length - 1;
  let p1 = 0;
  while (p1 <= p2) {
    if (nums[p1] === 0) {
      [nums[p0], nums[p1]] = [nums[p1], nums[p0]];
      p0++;
      p1++;
    } else if (nums[p1] === 1) {
      p1++;
    } else {
      [nums[p1], nums[p2]] = [nums[p2], nums[p1]];
      p2--;
    }
  }
}
