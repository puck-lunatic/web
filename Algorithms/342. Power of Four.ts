function isPowerOfFour(n: number): boolean {
  if (n <= 0) {
    return false;
  }
  let current = 1;
  while (current < n) {
    current *= 4;
  }

  return current === n;
}
