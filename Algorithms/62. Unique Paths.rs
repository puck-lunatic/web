impl Solution {
    pub fn unique_paths(m: i32, n: i32) -> i32 {
//         if m == 1 || n == 1 {
//             return 1;
//         }
        
//         Self::unique_paths(m - 1, n) + Self::unique_paths(m, n -1)
        
        let m = m as usize;
        let n = n as usize;
        let mut res = vec![vec![0; n]; m];
        for i in 0..m {
            for j in 0..n {
                match (i, j) {
                    (0, 0) => res[i][j] = 1,
                    (0, j) => res[i][j] = res[i][j - 1],
                    (i, 0) => res[i][j] = res[i - 1][j],
                    (i, j) => res[i][j] = res[i - 1][j] + res[i][j - 1],
                }
            }
        }
        res[m - 1][n - 1]
    }
}
