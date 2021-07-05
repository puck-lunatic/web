impl Solution {
    pub fn matrix_reshape(mat: Vec<Vec<i32>>, r: i32, c: i32) -> Vec<Vec<i32>> {
        let m = mat.len();
        let n = mat[0].len();
        let r = r as usize;
        let c = c as usize;
        if n*m != r*c { return mat; }

        let mut temp = vec![];
        for i in 0..m {
            for j in 0..n {
                temp.push(mat[i][j]);
            }
        }

        let mut res = vec![vec![0; c]; r];
        for i in 0..r {
            for j in 0..c {
                res[i][j] = temp[i*c + j] ;
            }
        }
        res
    }
}
