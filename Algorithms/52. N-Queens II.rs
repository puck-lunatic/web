impl Solution {
    pub fn total_n_queens(n: i32) -> i32 {
        
        let mut res = 0;
        let mut current_queens = vec![];
        let mut cols = vec![];
        let mut xy_sum = vec![];
        let mut xy_sub = vec![];
        let row = 0;

        Self::_dfs(n, &mut res, &mut current_queens, row, &mut cols, &mut xy_sum, &mut xy_sub);

        res
    }
    
    pub fn _dfs(
                n:              i32,
                res:            &mut i32,
                current_queens: &mut Vec<i32>,
                row:            i32,
                cols:           &mut Vec<i32>,
                xy_sum:         &mut Vec<i32>,
                xy_sub:         &mut Vec<i32>
            ) {
        if row >= n {
            *res += 1;
            return;
        }

        for col in 0..n {
            if cols.contains(&col) || xy_sum.contains(&(row + col)) || xy_sub.contains(&(row - col)) {
                continue;
            }

            cols.push(col);
            xy_sum.push(row + col);
            xy_sub.push(row - col);
            Self::_dfs(n, res, &mut [current_queens.clone(), [col].to_vec()].concat(), row + 1, cols, xy_sum, xy_sub);

            cols.retain(|&x| x != col);
            xy_sum.retain(|&x| x != (row + col));
            xy_sub.retain(|&x| x != (row - col));
        }
    }
}
