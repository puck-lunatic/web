impl Solution {
    pub fn num_trees(n: i32) -> i32 {
        if n == 1 { return 1; }
        if n == 2 { return 2; }
        
        let mut result = 0;
        result += Self::num_trees(n - 1) * 2;
        for i in 2..n {
            // if i == 1 { result += Self::num_trees(n - 1); }
            // else if i == n { result += Self::num_trees(n - 1); }
            result += Self::num_trees(i - 1) * Self::num_trees(n - i);
        }
        
        result
    }
}
