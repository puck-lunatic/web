const div:i64 = 1_000_000_007;

impl Solution {
    pub fn num_decodings(s: String) -> i32 {
        let chars: Vec<char> = s.chars().collect();
        let length = chars.len();
        let mut dp: Vec<i64> = vec![1; length + 1];
        if chars[0] == '*' { dp[1] = 9; }
        else if chars[0] == '0' { dp[1] = 0; }
        else { dp[1] = 1; }
        for i in 1..length {
            if chars[i] == '*' {
                dp[i + 1] = 9 * dp[i] % div;
                if chars[i - 1] == '1' { dp[i + 1] = (dp[i + 1] + 9 * dp[i - 1]) % div; }
                else if chars[i - 1] == '2' { dp[i + 1] = (dp[i + 1] + 6 * dp[i - 1]) % div; }
                else if chars[i - 1] == '*' { dp[i + 1] = (dp[i + 1] + 15 * dp[i - 1]) % div; }
            } else {
                if chars[i] != '0' {
                    dp[i + 1] = dp[i];
                } else {
                    dp[i + 1] = 0;
                }
                if chars[i - 1] == '1' { dp[i + 1] = (dp[i + 1] + dp[i - 1]) % div; }
                else if chars[i - 1] == '2' && (chars[i] as i64 - 48) <= 6 { dp[i + 1] = (dp[i + 1] + dp[i - 1]) % div; }
                else if chars[i - 1] == '*' {
                if (chars[i] as i64 - 48) <= 6 { dp[i + 1] += 2 * dp[i - 1] } else {
                    dp[i + 1] += dp[i - 1];
                }
                dp[i + 1] %= div; }
            }
        }
        dp[length] as i32
    }
}
