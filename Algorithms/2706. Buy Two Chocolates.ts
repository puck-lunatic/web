function buyChoco(prices: number[], money: number): number {
  prices.sort((a, b) => a - b);
  return prices[0] + prices[1] > money
    ? money
    : money - (prices[0] + prices[1]);
}
