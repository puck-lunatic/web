function minTaps(n: number, ranges: number[]): number {
  const last = new Array(n + 1).fill(0);
  for (let i = 0; i < n + 1; i++) {
    const l = Math.max(0, i - ranges[i]);
    const r = i + ranges[i];
    last[l] = Math.max(last[l], r);
  }
  let result = 0;
  let max = 0;
  let pre = 0;
  for (let i = 0; i < n; i++) {
    max = Math.max(max, last[i]);
    if (max <= i) {
      return -1;
    }
    if (pre === i) {
      result += 1;
      pre = max;
    }
  }
  return result;
}
