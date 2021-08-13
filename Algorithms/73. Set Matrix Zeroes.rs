impl Solution {
    pub fn set_zeroes(matrix: &mut Vec<Vec<i32>>) {
        let mut isCol = false;
        let m = matrix.len();
        let n = matrix[0].len();

        for i in 0..m {
            if matrix[i][0] == 0 {
                isCol = true;
            }
            for j in 1..n {
            if matrix[i][j] == 0 {
                matrix[0][j] = 0;
                matrix[i][0] = 0;
            }
        }
        }

        for i in 1..m {
            for j in 1..n {
                if matrix[i][0] == 0 || matrix[0][j] == 0 {
                    matrix[i][j] = 0;
                }
            }
        }

        if matrix[0][0] == 0 {
            for j in 0..n {
            matrix[0][j] = 0;
            }
        }

        if isCol {
            for i in 0..m {
                matrix[i][0] = 0;
            }
        }
    }
}
