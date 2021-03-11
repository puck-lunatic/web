use std::cmp;

impl Solution {
    pub fn coin_change(coins: Vec<i32>, amount: i32) -> i32 {
        let length = (amount + 1) as usize;
        let mut dp = vec![-1; length];
        dp[0] = 0;
        
        for i in 1..length {
            for &coin in &coins {
                if coin as usize <= i {
                    let j = i - coin as usize;
                    if dp[j] != -1 {
                        if dp[i] == -1 {
                            dp[i] = dp[j] + 1
                        } else {
                            dp[i] = cmp::min(dp[i], dp[j] + 1);
                        }
                    }
                }
            }
        }
        dp[amount as usize]
    }
}
