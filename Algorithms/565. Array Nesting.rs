use std::cmp;
use std::collections::HashSet;

impl Solution {
    pub fn array_nesting(nums: Vec<i32>) -> i32 {
        let mut res = 0;
        let mut set = HashSet::new();
        let leni32 = nums.len() as i32;
        let mut visited = vec![0; nums.len()];
        for i in 0..nums.len() {
            if visited[i] == 0 {
                let mut temp = nums[i];
                visited[i] = 1;
                set.insert(temp);
                while temp < leni32 && !set.contains(&nums[temp as usize]) {
                    temp = nums[temp as usize];
                    set.insert(temp);
                    visited[temp as usize] = 1;
                }
                res = cmp::max(res, set.len() as i32);
                set.clear()
            }
        }
        res
    }
}
