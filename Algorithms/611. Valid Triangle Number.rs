impl Solution {
    pub fn triangle_number(mut nums: Vec<i32>) -> i32 {
        let mut res = 0;
        let length = nums.len();
        nums.sort_unstable();
        for i in (2..length).rev() {
            let mut l = 0;
            let mut r = i - 1;
            while l < r {
                if nums[l] + nums[r] > nums[i] {
                    res += r - l;
                    r -= 1;
                } else {
                    l += 1;
                }
            }
        }
        res as i32
    }
}
