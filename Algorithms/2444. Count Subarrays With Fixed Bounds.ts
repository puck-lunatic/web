function countSubarrays(nums: number[], minK: number, maxK: number): number {
  let result: number = 0;
  let minIndex: number = -1;
  let maxIndex: number = -1;
  let outBoundIndex: number = -1;
  nums.forEach((num, i) => {
    if (num === minK) {
      minIndex = i;
    }
    if (num === maxK) {
      maxIndex = i;
    }
    if (num < minK || num > maxK) {
      outBoundIndex = i;
    }
    result += Math.max(Math.min(minIndex, maxIndex) - outBoundIndex, 0);
  });

  return result;
}
