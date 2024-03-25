function findDuplicates(nums: number[]): number[] {
  const result: number[] = [];
  const map = {};
  for (const num of nums) {
    if (map[num]) {
      result.push(num);
    } else {
      map[num] = true;
    }
  }
  return result;
}
