function majorityElement(nums: number[]): number[] {
  const n = nums.length;
  const majority = Math.floor(n / 3);
  // console.log(majority);
  nums.sort((a, b) => a - b);
  // console.log(nums);
  const result: number[] = [];
  let count = 1;
  let cur = nums[0];
  for (let i = 1; i < n; i++) {
    if (nums[i] === cur) {
      count += 1;
    } else {
      if (count > majority) {
        result.push(cur);
      }
      cur = nums[i];
      count = 1;
    }
  }
  if (count > majority) {
    result.push(cur);
  }
  return result;
}
