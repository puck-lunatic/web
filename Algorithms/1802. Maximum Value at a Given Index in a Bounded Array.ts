function maxValue(n: number, index: number, maxSum: number): number {
  const sum = (x: number, cnt: number) => {
    return x >= cnt
      ? Math.floor(((x + x - cnt + 1) * cnt) / 2)
      : Math.floor(((x + 1) * x) / 2) + cnt - x;
  };
  let left = 1,
    right = maxSum;
  while (left < right) {
    const mid = (left + right + 1) >>> 1;
    if (sum(mid - 1, index) + sum(mid, n - index) <= maxSum) {
      left = mid;
    } else {
      right = mid - 1;
    }
  }
  return left;
}
