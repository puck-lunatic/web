function numOfMinutes(
  n: number,
  headID: number,
  manager: number[],
  informTime: number[]
): number {
  const graph: number[][] = Array.from({ length: n }, (_) => []);
  for (let i = 0; i < n; i++) {
    if (manager[i] !== -1) {
      graph[manager[i]].push(i);
    }
  }
  const dfs = (i: number): number => {
    let result = 0;
    for (const j of graph[i]) {
      result = Math.max(result, dfs(j) + informTime[i]);
    }
    return result;
  };
  return dfs(headID);
}
