function climbStairs(n: number): number {
    if (n < 3) {
        return n;
    }
    const dp: number[] = [1, 2];
    for (let i = 2; i < n; i++) {
        dp.push(dp[i - 1] + dp[i - 2]);
    }
    return dp[n - 1];
};
