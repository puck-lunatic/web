function mincostToHireWorkers(
  quality: number[],
  wage: number[],
  k: number
): number {
  const n = quality.length;
  const ds: number[][] = new Array<Array<number>>();
  for (let i = 0; i < n; i++) {
    ds.push([wage[i] / quality[i], i]);
  }
  ds.sort((a, b) => a[0] - b[0]);
  const pq = new MaxPriorityQueue();
  let result = Number.POSITIVE_INFINITY;
  for (let i = 0, tot = 0; i < n; i++) {
    const cur = quality[ds[i][1]];
    tot += cur;
    pq.enqueue(cur);
    if (pq.size() > k) {
      tot -= pq.dequeue().element;
    }
    if (pq.size() == k) {
      result = Math.min(result, tot * ds[i][0]);
    }
  }
  return result;
}
