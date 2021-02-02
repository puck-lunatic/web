use std::cmp;

impl Solution {
    pub fn min_path_sum(grid: Vec<Vec<i32>>) -> i32 {
        let m = grid.len();
        let n = grid[0].len();
        let mut grid = grid;
        for i in 0..m {
            for j in 0..n {
                match (i, j) {
                    (0, 0) => continue,
                    (0, j) => grid[i][j] += grid[i][j - 1],
                    (i, 0) => grid[i][j] += grid[i - 1][j],
                    (i, j) => grid[i][j] += cmp::min(grid[i - 1][j], grid[i][j - 1]),
                }
            }
        }
        grid[m - 1][n - 1]
    }
}
