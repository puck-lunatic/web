function findMinArrowShots(points: number[][]): number {
  points.sort((a, b) => a[1] - b[1]);
  let result = 0;
  let last = Number.NEGATIVE_INFINITY;
  for (const [a, b] of points) {
    if (last < a) {
      result += 1;
      last = b;
    }
  }
  return result;
}
