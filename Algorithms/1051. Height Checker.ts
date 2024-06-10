function heightChecker(heights: number[]): number {
  const expected = [...heights].sort((a, b) => a - b);
  return heights.reduce((a, c, i) => a + (c !== expected[i] ? 1 : 0), 0);
}
