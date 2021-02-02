use std::collections::HashSet;

impl Solution {
    pub fn four_sum(nums: Vec<i32>, target: i32) -> Vec<Vec<i32>> {
        let mut result: HashSet<Vec<i32>> = HashSet::new();
        
        if nums.len() < 4 { return vec![]; }
        
        let mut nums = nums;
        nums.sort();
        
        for i in 0..nums.len() {
            // if nums[i] > target { break; }
            for j in i + 1..nums.len() {
                let c_sum = nums[i] + nums[j];
                let mut start = j + 1;
                let mut end = nums.len() - 1;
                while start < end {
                    let total = c_sum + nums[start] + nums[end]; 
                    if target == total {
                        let new_vec = vec![nums[i], nums[j], nums[start], nums[end]];
                        if !result.contains(&new_vec) {
                            result.insert(new_vec);
                        }
                        start += 1;
                        end -= 1;
                    }
                    else if total < target {
                        start += 1;
                    }
                    else {
                        end -= 1;
                    }
                }  
            }
        }
        result.into_iter().collect()
    }
}
