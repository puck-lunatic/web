function eraseOverlapIntervals(intervals: number[][]): number {
  intervals.sort((a, b) => a[1] - b[1]);
  const n = intervals.length;
  let cursor = intervals[0][1];
  let result = 0;
  for (let i = 1; i < n; i++) {
    let interval = intervals[i];
    if (cursor > interval[0]) {
      result += 1;
    } else {
      cursor = interval[1];
    }
  }
  return result;
}
