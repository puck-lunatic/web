function checkArithmeticSubarrays(
  nums: number[],
  l: number[],
  r: number[]
): boolean[] {
  const result: boolean[] = [];
  const m = l.length;
  for (let i = 0; i < m; i++) {
    const start = l[i];
    const end = r[i];
    const subArray = nums.slice(start, end + 1);
    subArray.sort((a, b) => a - b);
    const diff = subArray[1] - subArray[0];
    result.push(
      subArray.every((_, i, a) =>
        i === 0 || i === 1 ? true : a[i] - a[i - 1] === diff
      )
    );
  }
  return result;
}
