impl Solution {
    pub fn find_max_consecutive_ones(nums: Vec<i32>) -> i32 {
        let mut res = 0;
        let mut len = 0;
        for i in 0..nums.len() {
            if nums[i] == 1 {
                len += 1;
            } else {
                if len != 0 {
                    res = res.max(len);
                    len = 0;
                }
            }
        }
        res.max(len)
    }
}
