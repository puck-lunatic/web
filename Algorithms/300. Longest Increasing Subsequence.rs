use std::cmp;

impl Solution {
    pub fn length_of_lis(nums: Vec<i32>) -> i32 {
        let length = nums.len();
        let mut dp = vec![1; length];

        for i in 1..length {
            for j in 0..i {
                if (nums[i] > nums[j]) {
                    dp[i] = cmp::max(dp[i], dp[j] + 1);
                }
            }
        }

        *dp.iter().max().unwrap()
    }
}
