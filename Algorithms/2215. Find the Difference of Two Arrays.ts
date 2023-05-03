function findDifference(nums1: number[], nums2: number[]): number[][] {
  const result: number[][] = [[], []];
  nums1.forEach(
    (num) =>
      !nums2.includes(num) && !result[0].includes(num) && result[0].push(num)
  );
  nums2.forEach(
    (num) =>
      !nums1.includes(num) && !result[1].includes(num) && result[1].push(num)
  );
  return result;
}
