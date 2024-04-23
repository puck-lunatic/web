function findMinHeightTrees(n: number, edges: number[][]): number[] {
  if (n === 1) {
    return [0];
  }
  const graph: number[][] = Array.from({ length: n }, (_) => []);
  const degree: number[] = new Array(n).fill(0);
  for (const [a, b] of edges) {
    graph[a].push(b);
    graph[b].push(a);
    degree[a] += 1;
    degree[b] += 1;
  }
  const queue: number[] = [];
  for (let i = 0; i < n; i++) {
    if (degree[i] === 1) {
      queue.push(i);
    }
  }
  const result: number[] = [];
  while (queue.length > 0) {
    result.length = 0;
    const t: number[] = [];
    for (const a of queue) {
      result.push(a);
      for (const b of graph[a]) {
        if (--degree[b] === 1) {
          t.push(b);
        }
      }
    }
    queue.splice(0, queue.length, ...t);
  }
  return result;
}
