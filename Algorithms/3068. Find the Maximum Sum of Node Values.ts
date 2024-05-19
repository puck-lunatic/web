function maximumValueSum(nums: number[], k: number, edges: number[][]): number {
  let result = 0;
  let f = Number.MIN_SAFE_INTEGER;
  for (const x of nums) {
    const t = Math.max(f + x, result + (x ^ k));
    result = Math.max(result + x, f + (x ^ k));
    f = t;
  }
  return result;
}
