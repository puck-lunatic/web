function getMaximumGold(grid: number[][]): number {
  const m = grid.length;
  const n = grid[0].length;
  const dfs = (i: number, j: number): number => {
    if (i < 0 || i >= m || j < 0 || j >= n || grid[i][j] === 0) {
      return 0;
    }
    const gold = grid[i][j];
    grid[i][j] = 0;
    let result =
      gold +
      Math.max(dfs(i - 1, j), dfs(i + 1, j), dfs(i, j - 1), dfs(i, j + 1));
    grid[i][j] = gold;
    return result;
  };
  let result = 0;
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      result = Math.max(result, dfs(i, j));
    }
  }
  return result;
}
