impl Solution {
    pub fn is_ideal_permutation(a: Vec<i32>) -> bool {
        let n = a.len();
        for i in 0..n {
            if (a[i] - i as i32).abs() > 1 {
                return false;
            }
        }
        true
    }
}
