use std::cmp;

impl Solution {
    pub fn max_count(m: i32, n: i32, ops: Vec<Vec<i32>>) -> i32 {
        let length = ops.len();
        if length == 0 {
            return m * n;
        }
        let mut v_min = i32::MAX;
        let mut h_min = i32::MAX;
        for i in 0..ops.len() {
            v_min = cmp::min(ops[i][0], v_min) ;
            h_min = cmp::min(ops[i][1], h_min) ;
        }

        v_min * h_min

        // let mut matrix = vec![vec![0; n as usize]; m as usize];
        // for i in 0..ops.len() {
        //     let x = ops[i][0] as usize;
        //     let y = ops[i][1] as usize;
        //     for j in 0..x {
        //         for k in 0..y {
        //             matrix[j][k] += 1;
        //         }
        //     }
        // }
        // let mut h = 0;
        // let mut v = 0;
        // let max = matrix[0][0];
        // for i in 0..m {
        //     if matrix[i as usize][0] < max {
        //         break;
        //     }
        //     h += 1;
        // }
        // for i in 0..n {
        //     if matrix[0][i as usize] < max {
        //         break;
        //     }
        //     v += 1;
        // }
        // h * v
    }
}
