use std::cmp;

impl Solution {
    pub fn max_sub_array(nums: Vec<i32>) -> i32 {
        if nums.len() == 1 { return nums[0]; }
        let length = nums.len();
        let mut max = nums[0];
        let mut maxWithI = max;
        
        // "for" solution: Time Limit Exceeded
        // for i in 0..length {
        //     let temp = nums.windows(i + 1).map(|x| x.iter().sum()).max().unwrap();
        //     if temp > max { max = temp; }
        // }
        
        for i in 1..length {
            maxWithI = cmp::max(maxWithI + nums[i], nums[i]);
            max = cmp::max(maxWithI, max);
        }
        
        max
    }
}
