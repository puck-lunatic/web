function judgeSquareSum(c: number): boolean {
  let [a, b] = [0, Math.floor(Math.sqrt(c))];
  while (a <= b) {
    const s = a * a + b * b;
    if (s === c) {
      return true;
    }
    if (s < c) {
      a += 1;
    } else {
      b -= 1;
    }
  }
  return false;
}
