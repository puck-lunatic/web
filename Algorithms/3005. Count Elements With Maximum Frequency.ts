function maxFrequencyElements(nums: number[]): number {
  const map = {};
  for (const num of nums) {
    map[num] = (map[num] ?? 0) + 1;
  }
  const sorted = Object.entries(map).sort(
    (a, b) => Number(b[1]) - Number(a[1])
  );
  const maxCount = sorted[0][1];
  return sorted
    .filter((e) => e[1] === maxCount)
    .reduce((a, c) => a + Number(c[1]), 0);
}
