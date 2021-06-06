use std::collections::HashSet;
use std::cmp;

impl Solution {
    pub fn longest_consecutive(nums: Vec<i32>) -> i32 {
        let mut hs = HashSet::new();
        for num in nums.iter() {
            hs.insert(*num);
        }

        let mut res = 0;

        for num in nums.iter() {
            if !hs.contains(&(num - 1)) {
                let mut curNum = *num;
                let mut curSeq = 1;

                while hs.contains(&(curNum + 1)) {
                    curNum += 1;
                    curSeq += 1;
                }

                res = cmp::max(res, curSeq);
            }
        }

        res
    }
}
