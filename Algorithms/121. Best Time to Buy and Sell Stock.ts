function maxProfit(prices: number[]): number {
    if (prices.length < 2) {
        return 0;
    }

    // Dynamic Programming Array
    let dp: number[] = new Array(prices.length).fill(0);
    let minPrice = prices[0];

    for (let i = 1; i < prices.length; i++) {
        dp[i] = Math.max(dp[i - 1], prices[i] - minPrice);
        minPrice = Math.min(minPrice, prices[i]);
    }

    return dp[prices.length - 1];
};
