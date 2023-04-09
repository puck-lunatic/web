function largestPathValue(colors: string, edges: number[][]): number {
  const graph = {};
  const length = colors.length;
  const a = "a".charCodeAt(0);
  const indegree = Array(length).fill(0);
  for (const edge of edges) {
    if (!graph[edge[0]]) {
      graph[edge[0]] = [];
    }
    graph[edge[0]].push(edge[1]);
    indegree[edge[1]]++;
  }
  const cnt = Array.from({ length: length }, () => Array(26).fill(0));
  const queue = [];
  for (let i = 0; i < length; i++) {
    if (indegree[i] === 0) {
      queue.push(i);
      cnt[i][colors.charCodeAt(i) - a] = 1;
    }
  }
  let result = 0;
  let visited = 0;
  while (queue.length > 0) {
    const node = queue.shift();
    const val = Math.max(...cnt[node]);
    result = Math.max(result, val);
    visited++;
    if (!graph[node]) {
      continue;
    }
    for (let neighbor of graph[node]) {
      for (let i = 0; i < 26; i++) {
        cnt[neighbor][i] = Math.max(
          cnt[neighbor][i],
          cnt[node][i] + (i === colors.charCodeAt(neighbor) - a)
        );
      }
      if (--indegree[neighbor] === 0) {
        queue.push(neighbor);
      }
    }
  }
  return visited < length ? -1 : result;
}
