function isPowerOfTwo(n: number): boolean {
  if (n <= 0) {
    return false;
  }
  let cur = 1;
  while (cur < n) {
    cur *= 2;
  }
  return cur === n;
}
