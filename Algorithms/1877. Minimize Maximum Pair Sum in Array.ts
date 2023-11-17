function minPairSum(nums: number[]): number {
  nums.sort((a, b) => a - b);
  let result = Number.NEGATIVE_INFINITY;
  while (nums.length !== 0) {
    const head = nums.shift();
    const tail = nums.pop();
    result = Math.max(result, head + tail);
  }
  return result;
}
