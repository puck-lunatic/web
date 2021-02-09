use std::cmp;

impl Solution {
    pub fn num_squares(n: i32) -> i32 {
        let length = n as usize;
        let mut results = vec![0; length + 1];
        
        for i in 1..=length {
            results[i] = i;
            
            let mut j = 1;
            while i >= j * j {
                results[i] = cmp::min(results[i], results[i - j * j] + 1);
                j += 1;
            }
        }
        
        results[length] as i32
    }
}
