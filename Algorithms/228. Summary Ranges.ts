function summaryRanges(nums: number[]): string[] {
  if (nums.length === 0) {
    return [];
  }
  const result: string[] = [];
  const q: number[] = [];
  for (const num of nums) {
    if (q.length === 0 || q[q.length - 1] === num - 1) {
      q.push(num);
      continue;
    }
    result.push(`${q[0]}${q.length > 1 ? `->${q[q.length - 1]}` : ""}`);
    q.splice(0);
    q.push(num);
  }
  result.push(`${q[0]}${q.length > 1 ? `->${q[q.length - 1]}` : ""}`);
  return result;
}
