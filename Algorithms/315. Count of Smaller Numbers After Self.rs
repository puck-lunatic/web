use std::collections::BTreeMap;

impl Solution {
    pub fn count_smaller(nums: Vec<i32>) -> Vec<i32> {
        // Time Limit Exceeded
        // let length = nums.len();
        // if length == 1 { return vec![0]; }
        // let mut res = vec![0; length];
        // for i in 1..length {
        //    for j in 0..i {
        //        if nums[j] > nums[i] {
        //            res[j] += 1;
        //        }
        //     }
        // }
        // res

        let mut count: BTreeMap<i32, usize> = BTreeMap::new();
        let n = nums.len();
        let mut res = vec![0; n];
        for i in (0..n).rev() {
            let mut sum = 0;
            let x = nums[i];
            for (_, v) in count.range(..x) {
                sum += v;
            }
            *count.entry(x).or_default() += 1;
            res[i] = sum as i32;
        }
        res
    }
}
