function numSubmatrixSumTarget(matrix: number[][], target: number): number {
  const m = matrix.length;
  const n = matrix[0].length;
  const find = (nums: number[], target: number): number => {
    const map: Map<number, number> = new Map();
    map.set(0, 1);
    let count = 0;
    let sum = 0;
    for (const x of nums) {
      sum += x;
      if (map.has(sum - target)) {
        count += map.get(sum - target)!;
      }
      map.set(sum, (map.get(sum) || 0) + 1);
    }
    return count;
  };
  let result = 0;
  for (let i = 0; i < m; i++) {
    const col: number[] = new Array(n).fill(0);
    for (let j = i; j < m; j++) {
      for (let k = 0; k < n; k++) {
        col[k] += matrix[j][k];
      }
      result += find(col, target);
    }
  }
  return result;
}
