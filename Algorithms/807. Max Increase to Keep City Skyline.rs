use std::cmp;

impl Solution {
    pub fn max_increase_keeping_skyline(grid: Vec<Vec<i32>>) -> i32 {
        let length = grid.len();
        let mut rowMaxes = vec![0;length];
        let mut colMaxes = vec![0;length];

        for r in 0..length {
            for c in 0..length {
                rowMaxes[r] = cmp::max(rowMaxes[r], grid[r][c]);
                colMaxes[c] = cmp::max(colMaxes[c], grid[r][c]);
            }
        }

        let mut res = 0;
        for r in 0..length {
            for c in 0..length {
                res += cmp::min(rowMaxes[r], colMaxes[c]) - grid[r][c];
            }
        }
        res
    }
}
