function getRow(rowIndex: number): number[] {
  const trangle: number[][] = [[1]];
  if (rowIndex !== 0) {
    trangle.push([1, 1]);
  }

  if (rowIndex > 1) {
    for (let i = 2; i <= rowIndex; i++) {
      const layer = [1];
      for (let j = 1; j <= i - 1; j++) {
        layer.push(trangle[i - 1][j] + trangle[i - 1][j - 1]);
      }
      layer.push(1);
      trangle.push(layer);
    }
  }
  return trangle[rowIndex];
}
