function findErrorNums(nums: number[]): number[] {
  const result: number[] = [];
  const map = {};
  const set: Set<number> = new Set(nums);
  const inc = Array.from({ length: nums.length }, (_, i) => i + 1);
  for (const num of nums) {
    if (!map[num]) {
      map[num] = 1;
    } else {
      result.push(num);
      break;
    }
  }

  for (const num of inc) {
    if (!set.has(num)) {
      result.push(num);
      break;
    }
  }

  return result;
}
