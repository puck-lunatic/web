function missingNumber(nums: number[]): number {
  const arr = Array.from({ length: nums.length + 1 }, (_, i) => i);
  for (const num of arr) {
    if (!nums.includes(num)) {
      return num;
    }
  }
  return -1;
}
