struct NumMatrix {
    matrix: Vec<Vec<i32>>,
    sum: Vec<Vec<i32>>,
    n: usize,
    m: usize,
}


/** 
 * `&self` means the method takes an immutable reference.
 * If you need a mutable reference, change it to `&mut self` instead.
 */
impl NumMatrix {

    fn new(matrix: Vec<Vec<i32>>) -> Self {
        let n = matrix.len();
        let m = matrix[0].len();
        let mut sum = vec![vec![0; m + 1]; n + 1];
        for i in 0..n {
            for j in 0..m {
                sum[i + 1][j + 1] = matrix[i][j];
                sum[i + 1][j + 1] += sum[i + 1][j];
                sum[i + 1][j + 1] += sum[i][j + 1];
                sum[i + 1][j + 1] -= sum[i][j];
            }
        }
        NumMatrix { matrix, sum, n, m }
    }
    
    fn sum_region(&self, row1: i32, col1: i32, row2: i32, col2: i32) -> i32 {
        let r1 = row1 as usize;
        let c1 = col1 as usize;
        let r2 = row2 as usize + 1;
        let c2 = col2 as usize + 1;
        let mut res = 0;
        res += self.sum[r2][c2];
        res -= self.sum[r1][c2];
        res -= self.sum[r2][c1];
        res += self.sum[r1][c1];
        res
    }
}

/**
 * Your NumMatrix object will be instantiated and called as such:
 * let obj = NumMatrix::new(matrix);
 * let ret_1: i32 = obj.sum_region(row1, col1, row2, col2);
 */
 