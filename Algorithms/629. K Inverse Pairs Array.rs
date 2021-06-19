use std::cmp;

const div: i32 = 1_000_000_007;

impl Solution {
    pub fn k_inverse_pairs(n: i32, k: i32) -> i32 {
        let n = n as usize;
        let k = k as usize;
        let mut dp = vec![vec![0; k as usize + 1]; n as usize + 1];
        for i in 1..=n {
            for j in 0..= k{
                if (j == 0) {
                    dp[i][j] = 1;
                }
                else {
                    for p in 0..=cmp::min(j, i - 1) {
                        dp[i][j] = (dp[i][j] + dp[i - 1][j - p]) % div;
                    }
                }
            }
        }
        dp[n][k]
    }
}
