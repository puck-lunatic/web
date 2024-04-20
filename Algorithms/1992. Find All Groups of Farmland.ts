function findFarmland(land: number[][]): number[][] {
  const result: number[][] = [];
  const m = land.length;
  const n = land[0].length;
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (
        land[i][j] === 0 ||
        (j > 0 && land[i][j - 1] === 1) ||
        (i > 0 && land[i - 1][j] === 1)
      ) {
        continue;
      }
      let x = i;
      let y = j;
      for (; x + 1 < m && land[x + 1][j] === 1; x++);
      for (; y + 1 < n && land[x][y + 1] === 1; y++);
      result.push([i, j, x, y]);
    }
  }
  return result;
}
