function singleNumber(nums: number[]): number {
  const result = {};
  for (let num of nums) {
    result[num] = (result[num] ?? 0) + 1;
  }
  for (const [key, val] of Object.entries(result)) {
    if (val === 1) {
      return Number(key);
    }
  }
}
