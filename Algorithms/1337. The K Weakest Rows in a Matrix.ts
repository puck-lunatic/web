function kWeakestRows(mat: number[][], k: number): number[] {
  const sum = (nums: number[]) => nums.reduce((a, c) => a + c, 0);
  const calculatedMat = mat.map((row, i) => [i, sum(row)]);
  calculatedMat.sort((a, b) => a[1] - b[1]);
  return calculatedMat.map((e) => e[0]).slice(0, k);
}
