function minimumOneBitOperations(n: number): number {
  let result = 0;
  for (; n > 0; n >>= 1) {
    result ^= n;
  }
  return result;
}
