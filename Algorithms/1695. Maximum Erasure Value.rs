use std::collections::HashSet;

impl Solution {
    pub fn maximum_unique_subarray(nums: Vec<i32>) -> i32 {
        let length = nums.len();
        let mut sum = 0;
        let mut res = 0;
        let mut hs: HashSet<i32> = HashSet::new();
        let mut left = 0;
        for right in 0..length {
            if hs.insert(nums[right]) {
                sum += nums[right];
            } else {
                while nums[left] != nums[right] {
                    hs.remove(&nums[left]);
                    sum -= nums[left];
                    left += 1;
                }
                left += 1;
            }
            // dbg!(sum);
            res = res.max(sum);
        }
        res
    }
}
