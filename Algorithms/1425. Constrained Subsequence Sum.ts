function constrainedSubsetSum(nums: number[], k: number): number {
  const n = nums.length;
  const dp = new Array(n).fill(Number.NEGATIVE_INFINITY);
  let result = Number.NEGATIVE_INFINITY;
  const queue: number[] = [];
  for (let i = 0; i < n; i++) {
    if (queue.length !== 0 && i - queue[0] > k) {
      queue.shift();
    }
    dp[i] = Math.max(0, queue.length === 0 ? 0 : dp[queue[0]]) + nums[i];
    while (queue.length !== 0 && dp[queue[queue.length - 1]] <= dp[i]) {
      queue.pop();
    }
    queue.push(i);
    result = Math.max(result, dp[i]);
  }
  return result;
}
