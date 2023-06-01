function shortestPathBinaryMatrix(grid: number[][]): number {
  // bfs
  if (grid[0][0] === 1) {
    return -1;
  }
  const queue: number[][] = [[0, 0]];
  grid[0][0] = 1;
  let result = 1;
  const directions: number[][] = [
    [-1, -1],
    [-1, 0],
    [-1, 1],
    [0, -1],
    [0, 1],
    [1, -1],
    [1, 0],
    [1, 1],
  ];
  while (queue.length > 0) {
    const n = queue.length;
    for (let i = 0; i < n; i++) {
      const [x, y] = queue.shift();
      if (x === grid.length - 1 && y === grid.length - 1) {
        console.log("result");
        return result;
      }
      for (const [dx, dy] of directions) {
        const newX = dx + x;
        const newY = dy + y;
        if (
          newX >= 0 &&
          newX < grid.length &&
          newY >= 0 &&
          newY < grid.length &&
          grid[newX][newY] === 0
        ) {
          grid[newX][newY] = 1;
          queue.push([newX, newY]);
        }
      }
    }
    result += 1;
  }

  return -1;
}
