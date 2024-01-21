impl Solution {
    pub fn rob(nums: Vec<i32>) -> i32 {
        let mut dp: Vec<i32> = vec![0, 0];
        for x in nums {
            dp = vec![dp[0].max(dp[1]), dp[0] + x];
        }
        dp[0].max(dp[1])
    }
}
