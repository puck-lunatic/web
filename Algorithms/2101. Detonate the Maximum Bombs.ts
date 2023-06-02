function maximumDetonation(bombs: number[][]): number {
  const canDetonate = (i: number, j: number) => {
    if (i === j) {
      return false;
    }
    const x = bombs[i][0] - bombs[j][0];
    const y = bombs[i][1] - bombs[j][1];
    const r = bombs[i][2];
    return r * r >= x * x + y * y;
  };
  const n = bombs.length;
  const graph: boolean[][] = Array.from({ length: n }, (_) => new Array(n));
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      graph[i][j] = canDetonate(i, j);
    }
  }
  let result = 0;
  for (let k = 0; k < n; k++) {
    const queue: number[] = new Array();
    queue.push(k);
    const visited: boolean[] = new Array(n).fill(false);
    visited[k] = true;
    let cnt = 0;
    while (queue.length > 0) {
      const i = queue.shift();
      cnt += 1;
      for (let j = 0; j < n; j++) {
        if (graph[i][j] && !visited[j]) {
          visited[j] = true;
          queue.push(j);
        }
      }
    }
    result = Math.max(result, cnt);
  }
  return result;
}
