function diagonalSum(mat: number[][]): number {
  const length = mat.length;
  let result = 0;
  for (let i = 0; i < length; i++) {
    result += mat[i][i];
  }
  for (let i = 0; i < length; i++) {
    result += mat[i][length - i - 1];
  }

  return length % 2 === 0 ? result : result - mat[length >> 1][length >> 1];
}
