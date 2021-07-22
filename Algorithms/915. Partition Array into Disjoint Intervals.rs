impl Solution {
    pub fn partition_disjoint(nums: Vec<i32>) -> i32 {
        let length = nums.len();
        let mut left = vec![0; length];
        let mut right = vec![0; length];
        let mut min = std::i32::MAX;
        let mut max = std::i32::MIN;
        for i in (0..length).rev() {
            min = min.min(nums[i]);
            right[i] = min;
        }

        for i in 0..length {
            max = max.max(nums[i]);
            left[i] = max;
        }

        for i in 1..length {
            if right[i] >= left[i - 1] {
                return i as i32;
            }
        }
        0
    }
}
