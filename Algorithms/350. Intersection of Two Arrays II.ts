function intersect(nums1: number[], nums2: number[]): number[] {
  const result: number[] = [];
  const map: Record<string, number> = {};
  for (const num of nums1) {
    map[num] = (map[num] ?? 0) + 1;
  }
  for (const num of nums2) {
    if (map[num]) {
      result.push(num);
      map[num] -= 1;
    }
  }
  return result;
}
