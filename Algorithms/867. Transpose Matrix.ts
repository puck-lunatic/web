function transpose(matrix: number[][]): number[][] {
  const result: number[][] = [];
  const m = matrix.length;
  const n = matrix[0].length;
  for (let i = 0; i < n; i++) {
    const arr: number[] = [];
    for (let j = 0; j < m; j++) {
      arr.push(matrix[j][i]);
    }
    result.push(arr);
  }
  return result;
}
