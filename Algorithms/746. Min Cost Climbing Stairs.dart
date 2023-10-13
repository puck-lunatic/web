class Solution {
  int minCostClimbingStairs(List<int> cost) {
      List<int> dp = [0, 0];
    for (int i = 2; i <= cost.length; i++) {
        dp.add([dp[i - 2] + cost[i - 2], dp[i - 1] + cost[i - 1]].reduce(min));
    }
    return dp[cost.length];
  }
}