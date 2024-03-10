function intersection(nums1: number[], nums2: number[]): number[] {
  const result: number[] = [];
  for (const num of nums1) {
    if (nums2.includes(num) && !result.includes(num)) {
      result.push(num);
    }
  }
  return result;
}
