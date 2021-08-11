use std::cmp::Ordering::*;

impl Solution {
    pub fn can_reorder_doubled(arr: Vec<i32>) -> bool {
        let mut nonzero: Vec<Vec<i32>> = vec![vec![]; 2];
        let mut zero: usize = 0;
        for x in arr {
            match x.cmp(&0) {
                Equal => {
                    zero += 1;
                }
                Less => {
                    nonzero[0].push(-x);
                }
                Greater => {
                    nonzero[1].push(x);
                }
            }
        }
        if zero % 2 != 0 || nonzero[0].len() % 2 != 0 || nonzero[1].len() % 2 != 0 {
            return false;
        }
        for i in 0..2 {
            nonzero[i].sort_unstable();
            let size = nonzero[i].len();
            let mut fast = 0;
            for slow in 0..size {
                if nonzero[i][slow] == 0 {
                    continue;
                } else {
                    while fast < size && nonzero[i][fast] != 2 * nonzero[i][slow] {
                        fast += 1;
                    }
                    if fast == size {
                        return false;
                    } else {
                        nonzero[i][fast] = 0;
                    }
                }
            }
        }
        true
    }
}
