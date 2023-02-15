function merge(intervals: number[][]): number[][] {
  intervals.sort((a, b) => a[0] - b[0]);
  const result: number[][] = [];
  let i: number = 0;
  while (i < intervals.length) {
    let [begin, end] = intervals[i];
    i++;
    while (i < intervals.length && end >= intervals[i][0]) {
      end = Math.max(end, intervals[i][1]);
      i++;
    }
    result.push([begin, end]);
  }
  return result;
}
