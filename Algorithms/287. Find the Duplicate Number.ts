function findDuplicate(nums: number[]): number {
  // nums.sort((a, b) => a - b);
  // const n = nums.length;
  // for (let i = 1; i < n + 1; i++) {
  //     if (nums[i] === nums[i - 1]) {
  //         return nums[i];
  //     }
  // }
  // return -1;
  let l = 0;
  let r = nums.length - 1;
  while (l < r) {
    const mid = (l + r) >> 1;
    let cnt = 0;
    for (const num of nums) {
      if (num <= mid) {
        cnt += 1;
      }
    }
    if (cnt > mid) {
      r = mid;
    } else {
      l = mid + 1;
    }
  }
  return l;
}
