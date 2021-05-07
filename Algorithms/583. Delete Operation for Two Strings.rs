use std::cmp;

impl Solution {
    pub fn min_distance(word1: String, word2: String) -> i32 {
        let n = word1.len();
        let m = word2.len();
        let w1: Vec<char> = word1.chars().collect();
        let w2: Vec<char> = word2.chars().collect();
        let mut dp = vec![vec![0; m + 1]; n + 1];
        
        for i in 0..=n {
            for j in 0..=m {
                if i == 0 || j == 0 {
                    dp[i][j] = (i + j) as i32;
                } else if w1[i - 1] == w2[j - 1] {
                    dp[i][j] = dp[i - 1][j - 1];
                } else {
                    dp[i][j] = 1 + cmp::min(dp[i - 1][j], dp[i][j - 1]);
                }
            }
        }
        
        dp[n][m]
    }
}
