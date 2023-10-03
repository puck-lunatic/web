function numIdenticalPairs(nums: number[]): number {
  const counts = {};
  for (const num of nums) {
    if (!counts[num]) {
      counts[num] = 0;
    }
    counts[num] += 1;
  }

  let result = 0;
  for (const count of Object.values(counts)) {
    if (Number(count) < 2) {
      continue;
    }

    result += (Number(count) * (Number(count) - 1)) / 2;
  }

  return result;
}
