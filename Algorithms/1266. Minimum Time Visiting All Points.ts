function minTimeToVisitAllPoints(points: number[][]): number {
  const n = points.length;
  let result = 0;
  for (let i = 1; i < n; i++) {
    const pre = points[i - 1];
    const cur = points[i];
    const dx = Math.abs(cur[0] - pre[0]);
    const dy = Math.abs(cur[1] - pre[1]);
    result += Math.max(dx, dy);
  }
  return result;
}
