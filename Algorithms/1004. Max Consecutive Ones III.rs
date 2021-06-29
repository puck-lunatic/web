impl Solution {
    pub fn longest_ones(nums: Vec<i32>, k: i32) -> i32 {
        let length = nums.len();
        let mut sum = 0;
        let mut res = 0;
        let mut start = 0;
        let mut end = 0;
        while end < length {
            if sum <= k {
                if nums[end] == 0 {
                    sum += 1;
                }
                end += 1;
            } else {
                if nums[start] == 0 {
                    sum -= 1;
                }
                start += 1;
            }
            if sum <= k {
                res = res.max(end - start);
            }
        }
        res as i32
    }
}
