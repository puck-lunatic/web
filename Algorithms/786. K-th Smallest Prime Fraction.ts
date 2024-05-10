function kthSmallestPrimeFraction(arr: number[], k: number): number[] {
  const n = arr.length;
  const combinations: number[][] = [];
  for (let i = 0; i < n - 1; i++) {
    for (let j = i + 1; j < n; j++) {
      combinations.push([arr[i], arr[j]]);
    }
  }
  combinations.sort((a, b) => a[0] * b[1] - a[1] * b[0]);
  return combinations[k - 1];
}
