function countSubarrays(nums: number[], k: number): number {
  const max = Math.max(...nums);
  const n = nums.length;
  let [cnt, j] = [0, 0];
  let result = 0;
  for (const num of nums) {
    for (; j < n && cnt < k; j++) {
      cnt += nums[j] === max ? 1 : 0;
    }
    if (cnt < k) {
      break;
    }
    result += n - j + 1;
    cnt -= num === max ? 1 : 0;
  }
  return result;
}
