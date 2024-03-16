function findMaxLength(nums: number[]): number {
  const map = new Map<number, number>();
  map.set(0, -1);
  let sum = 0;
  let result = 0;
  for (let i = 0; i < nums.length; i++) {
    sum += nums[i] === 0 ? -1 : 1;
    if (map.has(sum)) {
      result = Math.max(result, i - map.get(sum));
    } else {
      map.set(sum, i);
    }
  }
  return result;
}
