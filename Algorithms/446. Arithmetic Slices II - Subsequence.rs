use std::collections::HashMap;

impl Solution {
    pub fn number_of_arithmetic_slices(nums: Vec<i32>) -> i32 {
        let length = nums.len();
        let mut res = 0;
        let mut dp: HashMap<(usize, i64), usize> = HashMap::new();
        for i in 0..length {
            for j in 0..i {
                let diff = nums[i] as i64 - nums[j] as i64;
                let prev = *dp.entry((j, diff)).or_insert(1);
                res += prev - 1;
                *dp.entry((i, diff)).or_insert(1) += prev;
            }
        }
        res as i32
    }
}
