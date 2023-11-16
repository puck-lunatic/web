function findDifferentBinaryString(nums: string[]): string {
  const bit = nums[0].length;
  const decimals = nums.map((num) => parseInt(num, 2));
  decimals.sort((a, b) => a - b);
  const n = decimals.length;
  for (let i = 0; i < n; i++) {
    if (i !== decimals[i]) {
      return i.toString(2).padStart(bit, "0");
    }
  }
  return n.toString(2).padStart(bit, "0");
}
