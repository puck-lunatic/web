function maximalNetworkRank(n: number, roads: number[][]): number {
  const graph: number[][] = Array.from({ length: n }, (_) =>
    new Array(n).fill(0)
  );
  const count: number[] = new Array(n).fill(0);
  for (const [a, b] of roads) {
    graph[b][a] = 1;
    graph[a][b] = 1;
    count[a] += 1;
    count[b] += 1;
  }
  let result = 0;
  for (let a = 0; a < n; a++) {
    for (let b = a + 1; b < n; b++) {
      result = Math.max(result, count[a] + count[b] - graph[a][b]);
    }
  }
  return result;
}
