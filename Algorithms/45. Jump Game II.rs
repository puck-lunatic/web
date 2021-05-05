use std::cmp;

impl Solution {
    pub fn jump(nums: Vec<i32>) -> i32 {
        if nums.len() == 1 { return 0; }
        
        let length = nums.len();
        let mut res = vec![1000; length];
        res[0] = 0;
        
        for i in 1..length {
            for j in 0..i {
                if ((i - j) as i32) <= nums[j] {
                    // println!("success: {},{}", i - j, nums[j]);
                    res[i] = cmp::min(res[i], 1 + res[j]);
                }
            }   
        }
        
        res[length - 1]
    }
}
