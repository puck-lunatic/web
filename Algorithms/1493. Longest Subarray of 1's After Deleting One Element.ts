function longestSubarray(nums: number[]): number {
  const n = nums.length;
  // brute force will cause "Time Limit Exceeded"
  // for (let i = n; i >= 2; i--) {
  //     for (let j = 0; j <= n - i; j++) {
  //         if (nums.slice(j, j + i).filter(e => e === 0).length <= 1) {
  //             return i - 1;
  //         }
  //     }
  // }
  const left: number[] = new Array(n).fill(0);
  const right: number[] = new Array(n).fill(0);
  for (let i = 1; i < n; i++) {
    if (nums[i - 1] === 1) {
      left[i] = left[i - 1] + 1;
    }
  }
  for (let i = n - 2; i >= 0; i--) {
    if (nums[i + 1] === 1) {
      right[i] = right[i + 1] + 1;
    }
  }
  let result = 0;
  for (let i = 0; i < n; i++) {
    result = Math.max(result, left[i] + right[i]);
  }
  return result;
}
