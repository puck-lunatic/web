function permuteUnique(nums: number[]): number[][] {
  const result: number[][] = [];
  const length: number = nums.length;
  const dfs = (index: number): void => {
    if (index === length) {
      result.push([...nums]);
    }
    const set = new Set<number>();
    for (let j = index; j < length; j++) {
      if (set.has(nums[j])) {
        continue;
      }
      set.add(nums[j]);
      [nums[index], nums[j]] = [nums[j], nums[index]];
      dfs(index + 1);
      [nums[index], nums[j]] = [nums[j], nums[index]];
    }
  };
  dfs(0);

  return result;
}
