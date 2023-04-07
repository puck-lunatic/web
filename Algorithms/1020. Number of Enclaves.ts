function numEnclaves(grid: number[][]): number {
  const m = grid.length;
  const n = grid[0].length;
  let result = 0;
  const traverse = (row: number, col: number) => {
    if (
      row < 0 ||
      row >= m ||
      col < 0 ||
      col >= n ||
      grid[row][col] === 0 ||
      grid[row][col] === 2
    ) {
      return;
    }

    grid[row][col] = 2;

    traverse(row + 1, col);
    traverse(row - 1, col);
    traverse(row, col + 1);
    traverse(row, col - 1);
  };

  // remove the border land
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (grid[i][j] === 1) {
        if (i === 0 || i === m - 1 || j === 0 || j === n - 1) {
          traverse(i, j);
        }
      }
    }
  }

  // calculate the island
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (grid[i][j] === 1) {
        result++;
      }
    }
  }

  return result;
}
