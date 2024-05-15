class UnionFind {
  private p: number[];
  private n: number;

  constructor(n: number) {
    this.n = n;
    this.p = Array.from({ length: n }, (_, i) => i);
  }

  find(x: number): number {
    if (this.p[x] !== x) {
      this.p[x] = this.find(this.p[x]);
    }
    return this.p[x];
  }

  union(a: number, b: number): boolean {
    const pa = this.find(a);
    const pb = this.find(b);
    if (pa !== pb) {
      this.p[pa] = pb;
      this.n--;
      return true;
    }
    return false;
  }
}

function maximumSafenessFactor(grid: number[][]): number {
  const n = grid.length;
  if (grid[0][0] === 1 || grid[n - 1][n - 1] === 1) {
    return 0;
  }
  const queue: number[][] = [];
  const infinity = Number.POSITIVE_INFINITY;
  const dist: number[][] = Array.from({ length: n }, (_) =>
    Array(n).fill(infinity)
  );

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (grid[i][j] === 1) {
        dist[i][j] = 0;
        queue.push([i, j]);
      }
    }
  }
  const dirs = [-1, 0, 1, 0, -1];
  while (queue.length) {
    const [i, j] = queue.shift()!;
    for (let k = 0; k < 4; k++) {
      const [x, y] = [i + dirs[k], j + dirs[k + 1]];
      if (x >= 0 && x < n && y >= 0 && y < n && dist[x][y] === infinity) {
        dist[x][y] = dist[i][j] + 1;
        queue.push([x, y]);
      }
    }
  }
  const t: number[][] = [];
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      t.push([dist[i][j], i, j]);
    }
  }
  t.sort((a, b) => b[0] - a[0]);
  const uf = new UnionFind(n * n);
  for (const [d, i, j] of t) {
    for (let k = 0; k < 4; k++) {
      const [x, y] = [i + dirs[k], j + dirs[k + 1]];
      if (x >= 0 && x < n && y >= 0 && y < n && dist[x][y] >= d) {
        uf.union(i * n + j, x * n + y);
      }
    }
    if (uf.find(0) === uf.find(n * n - 1)) {
      return d;
    }
  }
  return 0;
}
