use std::cmp;

impl Solution {
    pub fn longest_valid_parentheses(s: String) -> i32 {
        let mut res = 0;
        let chars: Vec<char> = s.chars().collect();
        
        let length = chars.len();
        let mut dp = vec![0;length];
        
        for i in 1..length {
            if chars[i] == ')' {
                if chars[i-1] == '(' {
                    if i >= 2 {
                        dp[i] =  dp[i - 2] + 2;
                    } else {
                        dp[i] = 2;
                    }
                } else if (i - dp[i - 1]) > 0 && chars[i - dp[i - 1] - 1] == '(' {
                    if (i - dp[i - 1]) >= 2 {
                        dp[i] = dp[i - 1] + dp[i - dp[i - 1] - 2] + 2;
                    } else {
                        dp[i] = dp[i - 1] + 2;
                    }
                }
                
                res = cmp::max(res, dp[i]);
            }
        }
        res as i32
    }
}
