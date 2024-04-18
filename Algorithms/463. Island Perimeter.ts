function islandPerimeter(grid: number[][]): number {
  const m = grid.length;
  const n = grid[0].length;
  let result = 0;
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (grid[i][j] === 1) {
        if (i - 1 < 0 || grid[i - 1][j] === 0) {
          result += 1;
        }
        if (i + 1 > m - 1 || grid[i + 1][j] === 0) {
          result += 1;
        }
        if (j - 1 < 0 || grid[i][j - 1] === 0) {
          result += 1;
        }

        if (j + 1 > n - 1 || grid[i][j + 1] === 0) {
          result += 1;
        }
      }
    }
  }

  return result;
}
