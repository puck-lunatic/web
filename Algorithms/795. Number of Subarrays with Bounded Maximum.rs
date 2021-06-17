impl Solution {
    pub fn num_subarray_bounded_max(nums: Vec<i32>, left: i32, right: i32) -> i32 {
        let n = nums.len();
        let mut start = 0;
        let mut end = 0;
        let mut res = 0;
        for i in 0..n {
            if nums[i] > right {
                start = i + 1;
            }
            if nums[i] >= left {
                end = i + 1;
            }
            if start < end {
                res += end - start;
            }
        }
        res as i32
    }
}