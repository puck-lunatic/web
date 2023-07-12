function eventualSafeNodes(graph: number[][]): number[] {
  const n = graph.length;
  // 0: unvisited, 1: visited, unsafe, 2: visited, safe
  const visited = new Array(n).fill(0);
  // true: safe, false: unsafe
  const dfs = (i: number): boolean => {
    if (visited[i] !== 0) {
      return visited[i] === 2;
    }
    visited[i] = 1;
    for (const node of graph[i]) {
      if (!dfs(node)) {
        return false;
      }
    }
    visited[i] = 2;
    return true;
  };
  let result: number[] = [];
  for (let i = 0; i < n; i++) {
    if (dfs(i)) {
      result.push(i);
    }
  }
  return result;
}
