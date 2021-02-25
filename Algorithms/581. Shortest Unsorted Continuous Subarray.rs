use std::i32;

impl Solution {
    pub fn find_unsorted_subarray(nums: Vec<i32>) -> i32 {
        let n = nums.len();
        let mut min = i32::MAX;
        let mut max = i32::MIN;
        let mut l = n - 1;
        let mut r = 0;

        for i in 0..n {
            max = i32::max(max, nums[i]);
            if max != nums[i] {
                r = i;
            }
        }
        
        for i in (0..n).rev() {
            min = i32::min(min, nums[i]);
            if min != nums[i] {
                l = i;
            }
        }
        
        if r <= l {
            0
        } else {
            (r - l + 1) as i32
        }
    }
}
