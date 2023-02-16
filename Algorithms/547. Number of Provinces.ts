function findCircleNum(isConnected: number[][]): number {
  const n: number = isConnected.length;
  const visited: boolean[] = new Array(n).fill(false);
  let result: number = 0;
  const dfs = (i: number): void => {
    visited[i] = true;
    for (let j = 0; j < n; j++) {
      if (!visited[j] && isConnected[i][j] === 1) {
        dfs(j);
      }
    }
  };

  for (let i = 0; i < n; i++) {
    if (!visited[i]) {
      dfs(i);
      result++;
    }
  }

  return result;
}
