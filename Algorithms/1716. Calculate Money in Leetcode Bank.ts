function totalMoney(n: number): number {
  let result = 0;
  for (let i = 1; i <= n; i++) {
    result += Math.floor(i / 7) + (i % 7 === 0 ? 6 : i % 7);
  }
  return result;
}
