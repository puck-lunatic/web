impl Solution {
    pub fn unique_paths_with_obstacles(obstacle_grid: Vec<Vec<i32>>) -> i32 {
        let m = obstacle_grid.len();
        if m == 0 {
            return 0;
        } else if obstacle_grid[0][0] == 1 {
            return 0;
        }
        let n = obstacle_grid[0].len();
        
        let mut res = vec![vec![0; n]; m];
        for i in 0..m {
            for j in 0..n {
                match (i, j) {
                    (0, 0) => res[i][j] = 1,
                    
                    (0, j) => {
                        if obstacle_grid[0][j] == 1 {
                            res[i][j] = 0;
                        } else {
                            res[i][j] = res[i][j - 1];
                        }
                    },
                    (i, 0) => {
                        if obstacle_grid[i][0] == 1 {
                            res[i][j] = 0;
                        } else {
                            res[i][j] = res[i - 1][j];
                        }
                    },
                    (i, j) => {
                        if obstacle_grid[i][j] == 1 {
                          res[i][j] = 0;
                        } else {
                            res[i][j] = res[i - 1][j] + res[i][j - 1];
                        }
                    },
                }
            }
        }
        
        res[m - 1][n - 1]
    }
}
