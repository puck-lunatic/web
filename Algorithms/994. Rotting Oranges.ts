function orangesRotting(grid: number[][]): number {
  let result: number = 0;
  const m: number = grid.length;
  const n: number = grid[0].length;
  const queue: number[][] = [];
  let fresh: number = 0;
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (grid[i][j] === 1) {
        fresh++;
      }
      if (grid[i][j] === 2) {
        queue.push([i, j]);
      }
    }
  }

  while (fresh !== 0 && queue.length != 0) {
    for (let i = queue.length; i > 0; i--) {
      const [x, y] = queue.shift();
      if (x - 1 >= 0 && grid[x - 1][y] === 1) {
        grid[x - 1][y] = 2;
        queue.push([x - 1, y]);
        fresh--;
      }

      if (y - 1 >= 0 && grid[x][y - 1] === 1) {
        grid[x][y - 1] = 2;
        queue.push([x, y - 1]);
        fresh--;
      }

      if (x + 1 < m && grid[x + 1][y] === 1) {
        grid[x + 1][y] = 2;
        queue.push([x + 1, y]);
        fresh--;
      }

      if (y + 1 < n && grid[x][y + 1] === 1) {
        grid[x][y + 1] = 2;
        queue.push([x, y + 1]);
        fresh--;
      }
    }
    result++;
  }
  if (fresh !== 0) {
    return -1;
  }
  return result;
}
