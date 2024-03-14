function numSubarraysWithSum(nums: number[], goal: number): number {
  const cnt = new Array(nums.length + 1).fill(0);
  cnt[0] = 1;
  let result = 0;
  let sum = 0;
  for (const num of nums) {
    sum += num;
    if (sum >= goal) {
      result += cnt[sum - goal];
    }
    ++cnt[sum];
  }
  return result;
}
