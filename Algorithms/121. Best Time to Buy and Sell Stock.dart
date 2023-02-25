import 'dart:math';

class Solution {
  int maxProfit(List<int> prices) {
    if (prices.length < 2) {
      return 0;
    }

    // Dynamic Programming Array
    List<int> dp = List.filled(prices.length, 0);

    int minPrice = prices[0];

    for (int i = 1; i < prices.length; i++) {
      dp[i] = max(dp[i - 1], prices[i] - minPrice);
      minPrice = min(minPrice, prices[i]);
    }

    return dp[prices.length - 1];
  }
}
