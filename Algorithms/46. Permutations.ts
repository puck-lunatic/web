function permute(nums: number[]): number[][] {
  const result: number[][] = [];
  const length: number = nums.length;
  const backTrack = (combination: number[]): void => {
    if (combination.length === length) {
      result.push([...combination]);
      return;
    }

    for (let i = 0; i < length; i++) {
      if (combination.includes(nums[i])) {
        continue;
      }
      combination.push(nums[i]);
      backTrack(combination);
      combination.pop();
    }
  };
  backTrack([]);

  return result;
}
