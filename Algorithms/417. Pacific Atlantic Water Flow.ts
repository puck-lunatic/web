function pacificAtlantic(heights: number[][]): number[][] {
  const result: number[][] = [];
  const m: number = heights.length;
  const n: number = heights[0].length;
  const grid: number[][] = new Array(m)
    .fill(0)
    .map((_) => new Array(n).fill(0));
  const visited: boolean[][] = new Array(m)
    .fill(0)
    .map((_) => new Array(n).fill(false));

  const dfs = (i: number, j: number) => {
    if (visited[i][j]) {
      return;
    }
    grid[i][j]++;
    visited[i][j] = true;
    const height = heights[i][j];
    if (i - 1 >= 0 && height <= heights[i - 1][j]) {
      dfs(i - 1, j);
    }
    if (j - 1 >= 0 && height <= heights[i][j - 1]) {
      dfs(i, j - 1);
    }
    if (i + 1 < m && height <= heights[i + 1][j]) {
      dfs(i + 1, j);
    }
    if (j + 1 < n && height <= heights[i][j + 1]) {
      dfs(i, j + 1);
    }
  };

  // Pacific Ocean
  for (let i = 0; i < n; i++) {
    dfs(0, i);
  }
  for (let i = 0; i < m; i++) {
    dfs(i, 0);
  }
  console.log(grid);
  visited.forEach((arr) => arr.fill(false));
  // Atlantic Ocean
  for (let i = 0; i < n; i++) {
    dfs(m - 1, i);
  }
  for (let i = 0; i < m; i++) {
    dfs(i, n - 1);
  }
  console.log(grid);
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (grid[i][j] === 2) {
        result.push([i, j]);
      }
    }
  }
  return result;
}
