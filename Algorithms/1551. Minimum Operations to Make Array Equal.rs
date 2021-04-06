impl Solution {
    pub fn min_operations(n: i32) -> i32 {
        let average = n;
        let mut res = 0;
        for i in 0..n {
            res += (average - (2 * i + 1)).abs();
        }
        
        res/2
    }
}
