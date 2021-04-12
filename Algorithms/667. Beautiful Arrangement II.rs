impl Solution {
    pub fn construct_array(n: i32, k: i32) -> Vec<i32> {
        let length = n as usize;
        let mut res = vec![0;length];
        let mut c: usize = 0;
        
        for v in 1..n-k {
            res[c] = v;
            c += 1;
        }
        
        for i in 0..=k {
            res[c] = if i%2 == 0  { n-k + i/2 } else {n - i/2};
            c += 1;
        }
        
        res
    }
}
