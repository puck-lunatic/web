impl Solution {
    pub fn missing_number(nums: Vec<i32>) -> i32 {
        let length = nums.len() as i32;
        for i in (0..length) {
            if !nums.contains(&i) {
                return i;
            }
        }
        length
    }
}
