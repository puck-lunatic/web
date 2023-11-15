function maximumElementAfterDecrementingAndRearranging(arr: number[]): number {
  const n = arr.length;
  arr.sort((a, b) => a - b);
  arr[0] = 1;
  let result = 1;
  for (let i = 1; i < n; i++) {
    const diff = Math.max(0, arr[i] - arr[i - 1] - 1);
    arr[i] -= diff;
    result = Math.max(result, arr[i]);
  }
  return result;
}
