function findContentChildren(g: number[], s: number[]): number {
  g.sort((a, b) => a - b);
  s.sort((a, b) => a - b);
  const m = g.length;
  const n = s.length;
  for (let i = 0, j = 0; i < m; i++) {
    while (j < n && s[j] < g[i]) {
      j += 1;
    }
    if (j++ >= n) {
      return i;
    }
  }
  return m;
}
