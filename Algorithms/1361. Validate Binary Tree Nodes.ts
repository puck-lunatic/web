function validateBinaryTreeNodes(
  n: number,
  leftChild: number[],
  rightChild: number[]
): boolean {
  const p = Array.from({ length: n }, (_, i) => i);

  const visited = new Array(n).fill(false);
  const find = (x: number): number => {
    if (p[x] !== x) {
      p[x] = find(p[x]);
    }
    return p[x];
  };
  for (let i = 0, m = n; i < m; i++) {
    for (const j of [leftChild[i], rightChild[i]]) {
      if (j !== -1) {
        if (visited[j] || find(i) === find(j)) {
          return false;
        }
        p[find(i)] = find(j);
        visited[j] = true;
        n -= 1;
      }
    }
  }
  return n === 1;
}
