function generate(numRows: number): number[][] {
  const result: number[][] = [[1]];
  if (numRows !== 1) {
    result.push([1, 1]);
  }

  if (numRows > 2) {
    for (let i = 3; i <= numRows; i++) {
      const layer = [1];
      for (let j = 1; j <= i - 2; j++) {
        layer.push(result[i - 2][j] + result[i - 2][j - 1]);
      }
      layer.push(1);
      result.push(layer);
    }
  }
  return result;
}
