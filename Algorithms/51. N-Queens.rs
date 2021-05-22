impl Solution {
    pub fn solve_n_queens(n: i32) -> Vec<Vec<String>> {
        if n < 1 { return vec![]; }

        let mut res = vec![];
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
                res:         &mut Vec<Vec<String>>,
                current_queens: &mut Vec<i32>,
                row:            i32,
                cols:           &mut Vec<i32>,
                xy_sum:         &mut Vec<i32>,
                xy_sub:         &mut Vec<i32>
               ) {
        if row >= n {
            res.push(Self::matrix(current_queens, n));
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
    
    pub fn matrix(queens: &mut Vec<i32>, n: i32) -> Vec<String> {
        let mut arr = vec![];
        let queens_len = queens.len();
        for i in queens {
            let mut char_vector = vec!['.'; n as usize];
            char_vector[*i as usize] = 'Q';
            let str: String = char_vector.into_iter().collect();
            arr.push(str);
        }

        arr
    }
}
