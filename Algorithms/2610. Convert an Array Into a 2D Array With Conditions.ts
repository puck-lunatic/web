function findMatrix(nums: number[]): number[][] {
  const result: number[][] = [];
  for (const num of nums) {
    const arr = result.find((e) => !e.includes(num));
    if (arr === undefined) {
      result.push([num]);
      continue;
    }
    arr.push(num);
  }
  return result;
}
