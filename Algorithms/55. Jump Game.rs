impl Solution {
    pub fn can_jump(nums: Vec<i32>) -> bool {
        let n = nums.len();
        let mut last = n - 1;
        for i in (0..n).rev() {
            if i + nums[i] as usize >= last {
                last = i;
            }
        }
        last == 0
    }
}
