use std::cmp;

impl Solution {
    pub fn min_cost_climbing_stairs(cost: Vec<i32>) -> i32 {
        let length = cost.len();
        let mut dp =  vec![0; length + 1];
        for i in 2..=length {
            dp[i] = cmp::min(dp[i- 2] + cost[i - 2], dp[i - 1] + cost[i - 1]);
        }
        dp[length]
    }
}
