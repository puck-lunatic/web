function sortedSquares(nums: number[]): number[] {
  const result = nums.map((num) => num ** 2);
  result.sort((a, b) => a - b);
  return result;
}
