use std::cmp;

impl Solution {
    pub fn wiggle_max_length(nums: Vec<i32>) -> i32 {
        let length = nums.len();
        if length < 2 {
            return length as i32;
        }
        
        let mut up: Vec<i32> = vec![1;length];
        let mut down: Vec<i32> = vec![1;length];
        
        for i in 1..length {
            if nums[i] > nums[i - 1] {
                up[i] = down[i - 1] + 1;
                down[i] = down[i - 1];
            } else if nums[i] < nums[i - 1] {
                down[i] = up[i - 1] + 1;
                up[i] = up[i - 1];
            } else {
                up[i] = up[i - 1];
                down[i] = down[i - 1];
            }
        }
        
        cmp::max(up[length - 1], down[length - 1])
    }
}
