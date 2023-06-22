function maxProfit(prices: number[], fee: number): number {
  let result = 0;
  let hold = -prices[0];
  const n = prices.length;

  for (let i = 0; i < n; i++) {
    result = Math.max(result, hold + prices[i] - fee);
    hold = Math.max(hold, result - prices[i]);
  }

  return result;
}
