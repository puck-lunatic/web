function minimumTime(n: number, relations: number[][], time: number[]): number {
  const graph: number[][] = Array.from({ length: n }, (_) => []);
  const indeg: number[] = Array(n).fill(0);
  for (const [pre, next] of relations) {
    graph[pre - 1].push(next - 1);
    ++indeg[next - 1];
  }
  const queue: number[] = [];
  const dp: number[] = Array(n).fill(0);
  let result: number = 0;
  for (let i = 0; i < n; i++) {
    if (indeg[i] === 0) {
      queue.push(i);
      dp[i] = time[i];
      result = Math.max(result, dp[i]);
    }
  }
  while (queue.length > 0) {
    const i = queue.shift()!;
    for (const j of graph[i]) {
      dp[j] = Math.max(dp[j], dp[i] + time[j]);
      result = Math.max(result, dp[j]);
      if (--indeg[j] === 0) {
        queue.push(j);
      }
    }
  }
  return result;
}
