function rearrangeArray(nums: number[]): number[] {
  const positive: number[] = [];
  const negative: number[] = [];
  for (const num of nums) {
    if (num > 0) {
      positive.push(num);
    } else {
      negative.push(num);
    }
  }
  const result: number[] = [];
  const n = positive.length;
  for (let i = 0; i < n; i++) {
    result.push(positive[i]);
    result.push(negative[i]);
  }
  return result;
}
