function maximumScore(nums: number[], k: number): number {
  const n = nums.length;
  const left = new Array(n).fill(-1);
  const right = new Array(n).fill(n);
  let stack: number[] = [];
  for (let i = 0; i < n; i++) {
    const v = nums[i];
    while (stack.length !== 0 && nums[stack[stack.length - 1]] >= v) {
      stack.pop();
    }
    if (stack.length !== 0) {
      left[i] = stack[stack.length - 1];
    }
    stack.push(i);
  }
  stack = [];
  for (let i = n - 1; i >= 0; i--) {
    const v = nums[i];
    while (stack.length !== 0 && nums[stack[stack.length - 1]] > v) {
      stack.pop();
    }
    if (stack.length !== 0) {
      right[i] = stack[stack.length - 1];
    }
    stack.push(i);
  }
  let result = 0;
  for (let i = 0; i < n; i++) {
    if (left[i] + 1 <= k && k <= right[i] - 1) {
      result = Math.max(result, nums[i] * (right[i] - left[i] - 1));
    }
  }
  return result;
}
