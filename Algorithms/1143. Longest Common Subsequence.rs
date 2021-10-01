use std::cmp;

impl Solution {
    pub fn longest_common_subsequence(text1: String, text2: String) -> i32 {
        let chars1 = text1.chars().collect::<Vec<char>>();
        let chars2 = text2.chars().collect::<Vec<char>>();
        let m = text1.len();
        let n = text2.len();
        let mut dp = vec![vec![0; n]; m];
        if chars1[0] == chars2[0] {
            dp[0][0] = 1;
        } else {
            dp[0][0] = 0;
        }

        for i in 1..m {
            if chars2[0] == chars1[i] || dp[i-1][0] == 1 {
                dp[i][0] = 1;
            }
        }

        for i in 1..n {
            if chars1[0] == chars2[i] || dp[0][i-1] == 1 {
                dp[0][i] = 1;
            }
        }

        for i in 1..m {
            for j in 1..n {
                if chars1[i] == chars2[j] {
                    dp[i][j] = dp[i-1][j-1] + 1;
                } else {
                    dp[i][j] = cmp::max(dp[i-1][j], dp[i][j-1]);
                }
            }
        }

        dp[m-1][n-1]
    }
}
