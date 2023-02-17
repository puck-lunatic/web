function combinationSum(candidates: number[], target: number): number[][] {
  const length: number = candidates.length;
  const stack: number[] = [];
  const result: number[][] = [];
  const backTrack = (i: number, sum: number): void => {
    if (sum > target) {
      return;
    }
    if (sum === target) {
      result.push([...stack]);
      return;
    }
    for (let j = i; j < length; j++) {
      stack.push(candidates[j]);
      backTrack(j, sum + candidates[j]);
      stack.pop();
    }
  };

  backTrack(0, 0);

  return result;
}
