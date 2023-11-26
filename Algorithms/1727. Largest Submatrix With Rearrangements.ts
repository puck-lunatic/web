function largestSubmatrix(matrix: number[][]): number {
  const m = matrix.length;
  const n = matrix[0].length;
  for (let col = 0; col < n; col++) {
    for (let row = 0; row < m; row++) {
      let tempRow = row;
      let count = 0;

      while (tempRow < m && matrix[tempRow][col] === 1) {
        count += 1;
        tempRow += 1;
      }

      while (count !== 0) {
        matrix[row][col] = count;
        count -= 1;
        row += 1;
      }
    }
  }

  for (let row = 0; row < m; row++) {
    matrix[row].sort((a, b) => a - b);
  }

  let result = 0;

  for (let row = 0; row < m; row++) {
    for (let col = n - 1; col >= 0; col--) {
      result = Math.max(result, matrix[row][col] * (n - col));
    }
  }

  return result;
}
