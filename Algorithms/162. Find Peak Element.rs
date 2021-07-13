impl Solution {
    pub fn find_peak_element(nums: Vec<i32>) -> i32 {
        let mut l = 0;
        let mut h = nums.len() - 1;
        while l < h {
            let m1 = l + (h - l) / 2;
            let m2 = m1 + 1;
            if nums[m1] < nums[m2] {
                l = m2;
            } else {
                h = m1;
            }
        }
        l as i32
    }
}
