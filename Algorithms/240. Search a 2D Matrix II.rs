use std::cmp::Ordering::*;

impl Solution {
    pub fn search_matrix(matrix: Vec<Vec<i32>>, target: i32) -> bool {
        // true
        let n = matrix.len();
        if n == 0 {
            return false;
        }
        
        let m = matrix[0].len();
        if m == 0 {
            return false;
        }
        
        let mut i = 0;
        let mut j = m - 1;
        loop {
            match matrix[i][j].cmp(&target) {
                Equal => {
                    break true;
                }
                Greater => {
                    if j > 0 {
                        j -= 1;
                    } else {
                        break false;
                    }
                }
                Less => {
                    if i + 1 < n {
                        i += 1;
                    } else {
                        break false;
                    }
                }
            }
        }
    }
}
