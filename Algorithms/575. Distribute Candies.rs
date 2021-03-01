use std::collections::HashSet;
use std::cmp;

impl Solution {
    pub fn distribute_candies(candy_type: Vec<i32>) -> i32 {
        let mut types: HashSet<i32> = HashSet::new();
        
        candy_type.iter().for_each(|x| { types.insert(*x); } );
        
        let mut res = cmp::min(candy_type.len() / 2, types.len());
        
        res as i32
    }
}
