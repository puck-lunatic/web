function equalPairs(grid: number[][]): number {
  const rows: string[] = [];
  const cols: string[] = [];
  const n = grid.length;
  for (let i = 0; i < n; i++) {
    rows.push(grid[i].join("-"));
  }
  for (let i = 0; i < n; i++) {
    const nums: number[] = [];
    for (let j = 0; j < n; j++) {
      nums.push(grid[j][i]);
    }
    cols.push(nums.join("-"));
  }
  let result = 0;
  for (const row of rows) {
    for (const col of cols) {
      if (row === col) {
        result += 1;
      }
    }
  }

  return result;
}
