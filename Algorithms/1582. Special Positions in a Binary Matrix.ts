function numSpecial(mat: number[][]): number {
  const m = mat.length;
  const n = mat[0].length;
  const rows = new Array(m).fill(0);
  const cols = new Array(n).fill(0);
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (mat[i][j] === 1) {
        rows[i] += 1;
        cols[j] += 1;
      }
    }
  }

  let result = 0;
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (mat[i][j] === 1 && rows[i] === 1 && cols[j] === 1) {
        result += 1;
      }
    }
  }

  return result;
}
