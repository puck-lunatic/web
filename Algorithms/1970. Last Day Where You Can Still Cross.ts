function latestDayToCross(row: number, col: number, cells: number[][]): number {
  const directions = [
    [0, -1],
    [0, 1],
    [1, 0],
    [-1, 0],
  ];
  const n = row * col;
  const p: number[] = Array.from({ length: n + 2 }, (v, i) => i);
  const grid: boolean[][] = Array.from({ length: row }, (_) =>
    Array.from({ length: col }, (_) => false)
  );
  const top = n,
    bottom = n + 1;
  const find = (x: number): number => {
    if (p[x] !== x) {
      p[x] = find(p[x]);
    }
    return p[x];
  };

  const check = (i: number, j: number): boolean =>
    i >= 0 && i < row && j >= 0 && j < col && grid[i][j];

  for (let k = cells.length - 1; k >= 0; k--) {
    const i = cells[k][0] - 1,
      j = cells[k][1] - 1;
    grid[i][j] = true;
    for (const direction of directions) {
      if (check(i + direction[0], j + direction[1])) {
        p[find(i * col + j)] = find(
          (i + direction[0]) * col + j + direction[1]
        );
      }
    }
    if (i === 0) {
      p[find(i * col + j)] = find(top);
    }
    if (i === row - 1) {
      p[find(i * col + j)] = find(bottom);
    }
    if (find(top) == find(bottom)) {
      return k;
    }
  }
  return 0;
}
