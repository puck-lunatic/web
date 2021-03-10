impl Solution {
    pub fn min_distance(word1: String, word2: String) -> i32 {
        let word1_bytes = word1.into_bytes();
        let word2_bytes = word2.into_bytes();
        let m = word1_bytes.len();
        let n = word2_bytes.len();
        let mut dp = vec![vec![0; n + 1]; m + 1];

        for i in 0..=m { dp[i][0] = i; }
        for j in 0..=n { dp[0][j] = j; }

        for i in 1..=m {
            for j in 1..=n {
                dp[i][j] = (dp[i - 1][j - 1] + (word1_bytes[i - 1] != word2_bytes[j - 1]) as usize)
                .min(dp[i - 1][j] + 1)
                .min(dp[i][j - 1] + 1);
            }
        }
        dp[m][n] as i32
    }
}
