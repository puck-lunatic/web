function maxProduct(nums: number[]): number {
  let result: number = nums[0];
  const length: number = nums.length;
  const dp1: number[] = new Array(length).fill(0);
  const dp2: number[] = new Array(length).fill(0);
  dp1[0] = nums[0];
  dp2[0] = nums[0];

  for (let i = 1; i < length; i++) {
    dp1[i] = Math.max(
      Math.max(dp1[i - 1] * nums[i], dp2[i - 1] * nums[i]),
      nums[i]
    );
    dp2[i] = Math.min(
      Math.min(dp1[i - 1] * nums[i], dp2[i - 1] * nums[i]),
      nums[i]
    );
    result = Math.max(result, dp1[i]);
  }

  return result;
}
