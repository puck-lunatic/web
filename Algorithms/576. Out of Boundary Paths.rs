const div: i32 = 1_000_000_007;

impl Solution {
    pub fn find_paths(m: i32, n: i32, max_move: i32, start_row: i32, start_column: i32) -> i32 {
        let rows = m as usize;
        let columns = n as usize;
        let mut dp = vec![vec![0; columns]; rows];
        dp[start_row as usize][start_column as usize] = 1;
        let mut res = 0;
        for moves in 1..=max_move {
            let mut temp = vec![vec![0; columns]; rows];
            for i in 0..rows {
                for j in 0..columns {
                    if i == rows - 1 { res = (res + dp[i][j]) % div; }
                    if j == columns - 1 { res = (res + dp[i][j]) % div; }
                    if i == 0 { res = (res + dp[i][j]) % div; }
                    if j == 0 { res = (res + dp[i][j]) % div; }
                    let mut temp_num_1 = 0;
                    if i > 0 { temp_num_1 += dp[i - 1][j]; }
                    if i < rows - 1 { temp_num_1 +=  dp[i + 1][j]; }
                    temp_num_1 %= div;
                    let mut temp_num_2 = 0;
                    if j > 0 { temp_num_2 += dp[i][j - 1]; }
                    if j < columns - 1  { temp_num_2 +=  dp[i][j + 1]; }
                    temp_num_2 %= div;

                    temp[i][j] = (temp_num_1 + temp_num_2) % div;
                }
            }
            dp = temp;
        }
        res
    }
}