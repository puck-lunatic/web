function updateMatrix(mat: number[][]): number[][] {
  const m = mat.length;
  const n = mat[0].length;
  const result: number[][] = Array.from({ length: m }, (_) =>
    new Array(n).fill(-1)
  );
  const queue: number[][] = [];
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (mat[i][j] === 0) {
        result[i][j] = 0;
        queue.push([i, j]);
      }
    }
  }
  const directions: number[] = [-1, 0, 1, 0, -1];
  while (queue.length > 0) {
    const [x, y] = queue.shift();
    for (let i = 0; i < 4; i++) {
      const dx = x + directions[i];
      const dy = y + directions[i + 1];
      if (dx >= 0 && dx < m && dy >= 0 && dy < n && result[dx][dy] === -1) {
        result[dx][dy] = result[x][y] + 1;
        queue.push([dx, dy]);
      }
    }
  }
  return result;
}
