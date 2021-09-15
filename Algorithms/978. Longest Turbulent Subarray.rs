use std::cmp::Ordering::*;

impl Solution {
    pub fn max_turbulence_size(arr: Vec<i32>) -> i32 {
        let length = arr.len();
        let mut res = 1;
        let mut inc = 1;
        let mut dec = 1;
        for i in 1..length {
            match (arr[i] - arr[i - 1]).cmp(&0) {
                Equal => {
                    inc = 1;
                    dec = 1;
                }
                Less => {
                    inc = dec + 1;
                    dec = 1;
                }
                Greater => {
                    dec = inc + 1;
                    inc = 1;
                }
            }
            res = res.max(inc.max(dec));
        }
        res
    }
}
