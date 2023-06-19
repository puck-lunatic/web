function largestAltitude(gain: number[]): number {
  let result = 0;
  let current = 0;
  for (const num of gain) {
    current += num;
    result = Math.max(current, result);
  }
  return result;
}
