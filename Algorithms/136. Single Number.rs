use std::collections::HashSet;

impl Solution {
    pub fn single_number(nums: Vec<i32>) -> i32 {
        let mut hs: HashSet<i32>= HashSet::new();
        nums.iter().for_each(|v| {
            if hs.contains(v) {
                hs.remove(v);
                return;
            }
            hs.insert(*v);
        });

        match hs.iter().nth(0) {
            Some(v) => return *v,
            None => panic!("Data Error"),
        }
    }
}