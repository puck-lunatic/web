function canMakeArithmeticProgression(arr: number[]): boolean {
  if (arr.length === 2) {
    return true;
  }
  arr.sort((a, b) => a - b);
  const diff = arr[1] - arr[0];
  return arr.every((e, i) => (i === 0 ? true : e - arr[i - 1] === diff));
}
