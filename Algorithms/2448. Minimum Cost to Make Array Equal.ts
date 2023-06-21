function minCost(nums: number[], cost: number[]): number {
  const n = nums.length;
  const arr: number[][] = [];
  for (let i = 0; i < n; i++) {
    arr.push([nums[i], cost[i]]);
  }
  arr.sort((a, b) => a[0] - b[0]);
  const mid = cost.reduce((a, c) => a + c, 0) / 2;
  let sum = 0;
  let result = 0;
  for (const e of arr) {
    const [num, cost] = e;
    sum += cost;
    if (sum > mid) {
      for (const ee of arr) {
        result += Math.abs(ee[0] - num) * ee[1];
      }
      break;
    }
  }
  return result;
}
