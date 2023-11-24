function maxCoins(piles: number[]): number {
  piles.sort((a, b) => b - a);
  const n = piles.length / 3;
  let result = 0;
  for (let i = 0; i < n; i++) {
    result += piles[2 * i + 1];
  }
  return result;
}
