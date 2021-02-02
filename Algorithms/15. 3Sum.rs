use std::collections::HashSet;
use std::collections::HashMap;

impl Solution {
    pub fn three_sum(nums: Vec<i32>) -> Vec<Vec<i32>> {
        let mut result: HashSet<Vec<i32>> = HashSet::new();
        
        if nums.len() < 3 { return vec![] }

        for (i, x) in nums.iter().enumerate() {
                let target = 0 - *x;

                let mut solutions: HashMap<i32, i32> = HashMap::new();

                for y in &nums[i + 1..] {
                    match solutions.get(y) {
                        Some(&z) => {
                              let mut v = vec![*x, *y, z];
                            v.sort();
                            result.insert(v);
                        }
                        None => {
                              solutions.insert(target - *y, *y);
                        }
                    }
                }
            }
        
        result.into_iter().collect()
    }
}
