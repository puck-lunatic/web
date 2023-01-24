function minCostClimbingStairs(cost: number[]): number {
    const dp: number[] = [0, 0];
    for (let i = 2; i <= cost.length; i++) {
        dp.push(Math.min(dp[i - 2] + cost[i - 2], dp[i - 1] + cost[i - 1]));
    }
    return dp[cost.length];
};
