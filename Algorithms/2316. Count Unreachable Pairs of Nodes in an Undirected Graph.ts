function countPairs(n: number, edges: number[][]): number {
  const graph = Array.from({ length: n }, (_) => []);
  for (const [a, b] of edges) {
    graph[a].push(b);
    graph[b].push(a);
  }
  const visited = new Array(n).fill(false);
  const dfs = (i: number) => {
    visited[i] = true;
    // to count total group node
    let count: number = 1;
    for (const j of graph[i]) {
      if (!visited[j]) {
        count += dfs(j);
      }
    }
    return count;
  };
  let result: number = 0;
  let totalCount: number = 0;
  for (let i = 0; i < n; i++) {
    if (!visited[i]) {
      const groupCount = dfs(i);
      result += totalCount * groupCount;
      totalCount += groupCount;
    }
  }
  return result;
}
