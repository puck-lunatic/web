impl Solution {
    pub fn num_decodings(s: String) -> i32 {
        let nums: Vec<u8> = s.bytes().map(|b| b - b'0').collect();
        let length = s.len();
        let mut dp: Vec<i32> = vec![0; length + 1];
        // tricky, only possibly used when i = 1;
        dp[0] = 1;
        dp[1] = if nums[0] > 0 { 1 } else { 0 };
        for i in 1..length {
            let first = nums[i];
            let second = nums[i - 1] * 10 + nums[i];
            if (1..=9).contains(&first) {
                dp[i + 1] += dp[i];
            }
            if (10..=26).contains(&second) {
                dp[i + 1] += dp[i - 1];
            }
        }
        dp[length]
    }
}
