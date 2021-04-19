impl Solution {
    pub fn combination_sum4(nums: Vec<i32>, target: i32) -> i32 {
        let length = target as usize;
        let mut dp = vec![0; length + 1];
        dp[0] = 1;
        for i in 1..=target {
            for &j in &nums {
                if i - j >= 0 {
                    dp[i as usize] += dp[(i - j) as usize];
                }
            }
        }
        dp[length]
    }
}
