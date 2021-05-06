use std::any::type_name;

impl Solution {
    pub fn hamming_distance(x: i32, y: i32) -> i32 {
        let mut z = x ^ y;
        // println!("{},{}", z, Solution::type_of(z));

        let mut sum = 0;
        for _ in 0..32 {
            sum += z & 1;
            z >>= 1;
        }
        sum
    }
    
    // fn type_of<T>(_: T) -> &'static str {
    //     type_name::<T>()
    // }
}
