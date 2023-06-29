function shortestPathAllKeys(grid: string[]): number {
  const directions = [-1, 0, 1, 0, -1];
  const m = grid.length,
    n = grid[0].length;
  let k = 0;
  let si = 0,
    sj = 0;
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      const c = grid[i].charAt(j);
      if ("a" <= c && c <= "z") {
        k += 1;
      } else if (c === "@") {
        si = i;
        sj = j;
      }
    }
  }
  const q: number[][] = [];
  q.push([si, sj, 0]);
  const visited: boolean[][][] = Array.from({ length: m }, (_) =>
    Array.from({ length: n }, (_) =>
      Array.from({ length: 1 << k }, (_) => false)
    )
  );
  visited[si][sj][0] = true;
  let result = 0;
  while (q.length > 0) {
    for (let t = q.length; t > 0; t--) {
      const p = q.shift();
      const i = p[0],
        j = p[1],
        state = p[2];
      if (state === (1 << k) - 1) {
        return result;
      }
      for (let h = 0; h < 4; h++) {
        const x = i + directions[h],
          y = j + directions[h + 1];
        if (x >= 0 && x < m && y >= 0 && y < n) {
          const c = grid[x].charAt(y);
          if (
            c === "#" ||
            ("A" <= c &&
              c <= "Z" &&
              ((state >> (c.charCodeAt(0) - "A".charCodeAt(0))) & 1) == 0)
          ) {
            continue;
          }
          let nxt = state;
          if ("a" <= c && c <= "z") {
            nxt |= 1 << (c.charCodeAt(0) - "a".charCodeAt(0));
          }
          if (!visited[x][y][nxt]) {
            visited[x][y][nxt] = true;
            q.push([x, y, nxt]);
          }
        }
      }
    }
    result += 1;
  }
  return -1;
}
