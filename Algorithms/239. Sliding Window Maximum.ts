function maxSlidingWindow(nums: number[], k: number): number[] {
  const n = nums.length;
  const result: number[] = [];
  // O(n): Time Limit Exceeded
  // const window: number[] = [];
  // for (let i = 0; i < k; i++) {
  //     window.push(nums[i]);
  // }
  // result.push(Math.max(...window));
  // for (let i = k; i < n; i++) {
  //     window.shift();
  //     window.push(nums[i]);
  //     result.push(Math.max(...window));

  // }
  // return result;
  const queue: number[] = [];
  for (let i = 0; i < n; i++) {
    if (queue.length > 0 && i - k + 1 > queue[0]) {
      queue.shift();
    }
    while (queue.length > 0 && nums[queue[n - 1]] <= nums[i]) {
      queue.pop();
    }
    queue.push(i);
    if (i >= k - 1) {
      result.push(nums[queue[0]]);
    }
  }
  return result;
}
