function countPaths(grid: number[][]): number {
  const mod = 1_000_000_007;
  const m = grid.length;
  const n = grid[0].length;
  const f = Array.from({ length: m }, (_) => new Array(n).fill(0));
  const dirs: number[] = [-1, 0, 1, 0, -1];
  const dfs = (i: number, j: number): number => {
    if (f[i][j] !== 0) {
      return f[i][j];
    }
    let result = 1;
    for (let k = 0; k < 4; k++) {
      const newI = i + dirs[k];
      const newJ = j + dirs[k + 1];
      if (
        newI >= 0 &&
        newI < m &&
        newJ >= 0 &&
        newJ < n &&
        grid[i][j] < grid[newI][newJ]
      ) {
        result = (result + dfs(newI, newJ)) % mod;
      }
    }
    f[i][j] = result;
    return result;
  };
  let result = 0;
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      result = (result + dfs(i, j)) % mod;
    }
  }
  return result;
}
