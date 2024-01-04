function minOperations(nums: number[]): number {
  const counts = {};
  for (const num of nums) {
    counts[num] = (counts[num] ?? 0) + 1;
  }
  let result = 0;
  for (const count of Object.values(counts)) {
    if (Number(count) < 2) {
      return -1;
    }
    result += ((Number(count) + 2) / 3) | 0;
  }
  return result;
}
