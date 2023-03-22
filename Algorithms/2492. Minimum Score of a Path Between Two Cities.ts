function minScore(n: number, roads: number[][]): number {
  const visited = new Array(n + 1).fill(false);
  const graph = Array.from({ length: n + 1 }, (_) => []);
  for (const [a, b, v] of roads) {
    graph[a].push([b, v]);
    graph[b].push([a, v]);
  }
  let result: number = Number.POSITIVE_INFINITY;
  const dfs = (i: number) => {
    if (visited[i]) {
      return;
    }
    visited[i] = true;
    for (const [j, v] of graph[i]) {
      result = Math.min(result, v);
      dfs(j);
    }
  };
  dfs(1);
  return result;
}
