function longestSubsequence(arr: number[], difference: number): number {
  let result = 1;
  const dp: Map<number, number> = new Map();
  for (const v of arr) {
    dp.set(v, (dp.get(v - difference) || 0) + 1);
    result = Math.max(result, dp.get(v));
  }
  return result;
}
