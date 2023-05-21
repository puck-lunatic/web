function shortestBridge(grid: number[][]): number {
  const n = grid.length;
  const direct: number[][] = [
    [0, 1],
    [0, -1],
    [1, 0],
    [-1, 0],
  ];
  const overBoundary = (i: number, j: number): boolean => {
    return i < 0 || i >= n || j < 0 || j >= n;
  };
  const queue: [number, number][] = [];
  const dfs = (x: number, y: number) => {
    if (overBoundary(x, y) || grid[x][y] !== 1) {
      return;
    }
    queue.push([x, y]);
    grid[x][y] = 2;
    for (const [dx, dy] of direct) {
      dfs(x + dx, y + dy);
    }
  };

  const bfs = (): number => {
    let result: number = 0;
    while (queue.length > 0) {
      let length: number = queue.length;
      while (length--) {
        const [x, y] = queue.shift()!;
        for (const [dx, dy] of direct) {
          const newX: number = x + dx;
          const newY: number = y + dy;
          if (overBoundary(newX, newY)) {
            continue;
          }
          if (grid[newX][newY] === 1) {
            return result;
          } else if (grid[newX][newY] === 0) {
            grid[newX][newY] = 2;
            queue.push([newX, newY]);
          }
        }
      }
      result++;
    }
    return result;
  };

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (grid[i][j]) {
        dfs(i, j);
        return bfs();
      }
    }
  }

  // unreachable!!!
  return -1;
}
