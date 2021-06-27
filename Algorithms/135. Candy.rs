use std::cmp;

impl Solution {
    pub fn candy(ratings: Vec<i32>) -> i32 {
        let length = ratings.len();
        if length == 1 { return 1; }
        let mut res = 0;
        let mut left2right = vec![1; length];
        let mut right2left = vec![1; length];

        for i in 1..length {
            if ratings[i] > ratings[i - 1] {
                left2right[i] = left2right[i - 1] + 1;
            }
        }
        for i in (0..=(length - 2)).rev() {
            // println!("index: {}", i);
            if ratings[i] > ratings[i + 1] {
                right2left[i] = right2left[i + 1] + 1;
            }
        }
        for i in 0..length {
            res += cmp::max(left2right[i], right2left[i]);
        }

        res
    }
}
