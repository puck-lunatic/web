function topKFrequent(nums: number[], k: number): number[] {
  const map: Map<number, number> = new Map();
  for (const num of nums) {
    map.set(num, (map.get(num) ?? 0) + 1);
  }

  return [...map.entries()]
    .sort((a, b) => b[1] - a[1])
    .map((e) => e[0])
    .slice(0, k);
}
