function minOperations(nums: number[], x: number): number {
  x = nums.reduce((a, b) => a + b, 0) - x;
  const visited: Map<number, number> = new Map();
  visited.set(0, -1);
  const n = nums.length;
  let result = 1 << 30;
  for (let i = 0, s = 0; i < n; i++) {
    s += nums[i];
    if (!visited.has(s)) {
      visited.set(s, i);
    }
    if (visited.has(s - x)) {
      const j = visited.get(s - x);
      result = Math.min(result, n - (i - j));
    }
  }
  return result == 1 << 30 ? -1 : result;
}
