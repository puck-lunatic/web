function tribonacci(n: number): number {
  const q = [0, 1, 1];
  if (n <= 2) {
    return q[n];
  }
  let i = 3;
  while (i <= n) {
    const next = q.reduce((a, c) => a + c, 0);
    q.push(next);
    q.shift();
    i++;
  }
  return q.pop();
}
